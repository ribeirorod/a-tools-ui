import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseSidebar from "../../../common/components/sidebar/base-sidebar";
import BaseComponent from "../../../common/components/base-component";
import { applications } from '../handlers/configHandler';
import { setSelectedApplication } from '../slices/applicationSlice';
import ButtonInvoiceExport from "./ButtonInvoiceExport";
import ButtonInvoiceUpload from "./ButtonInvoiceUpload";
import styles from './DocumentAISidebar.module.css';
import { toggleSideBar } from '../slices/applicationSlice';  // Add this import


const DocumentAISidebar = ({props}) => {
  const dispatch = useDispatch();
  const [apps, setApps] = useState([]);
  const selectedApplication = useSelector((state) => state.application.selectedApplication);
  const invoices = useSelector((state) => state.invoices.data);
  const [invoicesExported, setInvoicesExported] = useState(false);
  const isOpen = useSelector((state) => state.displaySideBar.isVisible);

  useEffect(() => {
    async function fetchApplications() {
      const fetchedApps = await applications();
      setApps(['select application', ...fetchedApps]);
      if (fetchedApps.length > 0 && !selectedApplication) {
        dispatch(setSelectedApplication('select application'));
      }
    }
    fetchApplications();
  }, [dispatch, selectedApplication]);

  const handleConfigChange = (event) => {
    dispatch(setSelectedApplication(event.target.value));
  };

  const handleExport = (status) => {
    setInvoicesExported(status);
  };

  const handleClose = () => {
    dispatch(toggleSideBar());
  };

  return (
    <BaseSidebar
      isOpen={isOpen}
      onClose={handleClose}
      position="right"
      behavior="slide"
      size="md"
      // className={styles.documentAISidebar}
      padding="none"
      {...props}
    >
      <BaseComponent 
      // className={styles.sidebarContent}
      >
        <h2 className={styles.sidebarTitle}>Document AI Tools</h2>
        <select
          value={selectedApplication}
          onChange={handleConfigChange}
          className={styles.applicationSelect}
        >
          {apps.map((app) => (
            <option key={app} value={app}>
              {app}
            </option>
          ))}
        </select>
        <div className={styles.buttonContainer}>
          <ButtonInvoiceUpload config={selectedApplication} />
          <ButtonInvoiceExport
            onExport={handleExport}
            application={selectedApplication}
            isDisabled={invoices.length === 0 || invoicesExported}
          />
        </div>
      </BaseComponent>
    </BaseSidebar>
  );
};

export default DocumentAISidebar;