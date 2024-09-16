import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reprocessInvoice, setInvoices, updateInvoice } from '../slices/invoiceSlice';

function DynamicForm({
  data,
  template,
  formIndex,
}) {
  const initialData = useMemo(() => {
    const initialFormData = {};
    const data = {};
    for (let key in template) {
      if (template[key].type === "array") {
        data[key] =
          initialFormData[key] || template[key].item
            ? [template[key].item]
            : [];
      } else {
        data[key] = initialFormData[key] || "";
      }
    }
    return data;
  }, [template]);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data ? data.invoice : initialData);
  const [activeField, setActiveField] = useState({ field: null, index: null });
  
  const isReprocessing = useSelector((state) => state.invoices.isReprocessing[formIndex]);
  const isSubmitted = useSelector((state) => state.invoices.isSubmitted[formIndex]);

  const invoices = useSelector((state) => state.invoices.data);
  
  const handleChange = (e, key, index) => {
    const { name, value } = e.target;
  
    if (Array.isArray(formData[key])) {
      let updatedItems = [...formData[key]];
      updatedItems[index] = { ...updatedItems[index], [name]: value }; 
      setFormData((prevState) => ({ ...prevState, [key]: updatedItems }));
      // update redux store 
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
    dispatch(setInvoices(invoices.map((invoice, i) =>
    i === formIndex ? { ...invoice, invoice: formData } : invoice
  )));
  };


  const handleReprocessInvoice = async () => {
    dispatch(reprocessInvoice({ data, applicationName: data.invoice['application'], index: formIndex }));
  };
  const [isApproved, setIsApproved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsApproved(true);
    try {
      await new Promise((resolve, reject) => {
        dispatch(updateInvoice({ updatedInvoice: formData, index: formIndex }))
          .then(resolve)
          .catch(reject); 
      });
    } catch (error) {
      setIsApproved(false);
      console.error('Error updating invoice', error);
    } finally {
    }
  };
  const handleAddItem = (key, index) => {
    setFormData((prevState) => {
      const newItem = prevState[key] && prevState[key][index] ? JSON.parse(JSON.stringify(prevState[key][index])) : {};
      return {
        ...prevState,
        [key]: [...(prevState[key] || []), newItem],
      };
    });
  };

  const handleRemoveItem = (key, index) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((_, i) => i !== index),
    }));
  };
  return (
    <form onSubmit={handleSubmit} disabled={isReprocessing || isSubmitted}>
      <Grid container spacing={2}>
        {Object.keys(formData).map((key) => {
          if (!Array.isArray(formData[key])) {
            return (
              <Grid item xs={6} key={key}>
                <TextField
                  name={key}
                  label={
                    key.replace("_", " ").charAt(0).toUpperCase() +
                    key.replace("_", " ").slice(1)
                  }
                  disabled={isSubmitted}
                  value={formData[key]}
                  onChange={(e) => handleChange(e, key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.preventDefault();
                  }}
                  fullWidth
                />
              </Grid>
            );
          } else {
            return formData[key].map((item, index) => (
              <Grid item xs={12} key={index} container spacing={2} sx={{ position: 'relative' }}>
                <IconButton
                  onClick={() => handleAddItem(key, index)}
                  color="gray"
                  title="duplicate this item"
                  size="small"
                  sx={{
                    position: "absolute",
                    display: isSubmitted? "none": "inherit",
                    zIndex: 100,
                    opacity: 0.3,
                    overflow: 'visible',
                    transition: "opacity 0.3s ease",
                    right: '0rem', 
                    top: '1.6rem', 
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <AddIcon />
                </IconButton>
                {formData[key].length > 1 && (
                  <IconButton
                    onClick={() => handleRemoveItem(key, index)}
                    color="gray"
                    title="remove this item"
                    size="small"
                    sx={{
                      position: "absolute",
                      display: isSubmitted? "none": "inherit",
                      zIndex: 100,
                      opacity: 0.3,
                      overflow: 'visible',
                      transition: "opacity 0.3s ease",
                      right: '0rem', 
                      top: '3.5rem', 
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}

                {Object.keys(item).map((subKey) => (
                  <Grid item xs={3} key={subKey} sx={{zIndex:0}}>
                    <TextField
                      name={subKey}
                      label={
                        subKey.replace("_", " ").charAt(0).toUpperCase() +
                        subKey.replace("_", " ").slice(1)
                      }
                      disabled={isSubmitted}
                      value={item[subKey]}
                      onChange={(e) => handleChange(e, key, index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                      onFocus={() => setActiveField({ field: subKey, index })}
                      onBlur={() => setActiveField({ field: null, index: null })}
                      fullWidth
                      sx={{
                       
                        transition: "width 0.35s ease-in-out",
                        // when on focus expand the width for better edit capabilities
                        width:  activeField.field !== null && activeField.field === subKey && activeField.index === index ? "200%" : "100%",
                        // when on focus blur the neighbour fields for better visibitily
                        opacity: activeField.field !== null && (activeField.field !== subKey || activeField.index !== index) ? 0.15 : 1,
                      }}

                    />
                  </Grid>
                ))}

              </Grid>
            ));
          }
        })}
      </Grid>
      <Box
        sx={{
          justifyContent: "space-between",
          right: "3.5rem",
          bottom: "3rem",
          width: "auto",
          mt: '1rem'
        }}
      >
        {Object.keys(formData).some((key) => Array.isArray(formData[key])) && (
          <Grid item xs={12}>
            <Button 
            
            onClick={handleReprocessInvoice}
              variant="contained" 
              color={isSubmitted ? "secondary" : "primary"} 
              disabled={isReprocessing || isApproved ||isSubmitted}
              sx={{ mr: 1 ,textTransform: 'none', fontWeight: 'bold'}}
              >
              re-process
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isReprocessing || isApproved ||isSubmitted}
              sx={{ mr: 1 ,textTransform: 'none', fontWeight: 'bold'}}
            >
              approve
            </Button>
          </Grid>
        )}
      </Box>
    </form>
  );
}

export default DynamicForm;
