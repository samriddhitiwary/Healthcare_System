import React from 'react';

const Biopsy = () => {
  const styles = {
    container: {
      margin: '0 auto',
      padding: '24px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '900px',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#3b82f6',
      marginBottom: '24px',
      textAlign: 'center',
    },
    paragraph: {
      marginBottom: '24px',
      color: '#374151',
    },
    section: {
      marginBottom: '32px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '32px',
      color: '#374151',
    },
    listItem: {
      marginBottom: '8px',
    },
    subheading: {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#374151',
    },
    note: {
      marginTop: '16px',
      fontStyle: 'italic',
      color: '#4b5563',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What is a Biopsy?</h1>
      <p style={styles.paragraph}>
        A biopsy is the removal of a small amount of tissue or cells from specific parts of the body and subsequent examination under a microscope to confirm the presence of a cancer or any other abnormality.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>When It’s Done</h2>
        <p style={styles.paragraph}>
          When cancer is suspected following a physical examination or imaging study, such as an x-ray, to arrive at a definitive diagnosis.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>When to Avoid</h2>
        <p style={styles.paragraph}>
          There is no specific condition when this should be avoided.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How to Prepare</h2>
        <p style={styles.subheading}>Before and During the Procedure:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Preparation for the biopsy depends on the type of biopsy that is performed.</li>
          <li style={styles.listItem}>Ask your doctor if you can eat or drink and if you can take your regular medications before the procedure.</li>
          <li style={styles.listItem}>A local anaesthetic agent is injected to numb the area of the biopsy to avoid pain.</li>
          <li style={styles.listItem}>Hold your breath when the needle is inserted and sit still during the entire procedure.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>After the Procedure</h2>
        <p style={styles.paragraph}>
          You may be able to get back to a normal routine immediately after the procedure or be required to stay in the hospital for further evaluation and observation depending on the procedure performed.
        </p>
        <p style={styles.paragraph}>
          Consult your doctor if there are signs of infection, pain, fever, or bleeding after the biopsy.
        </p>
      </div>
    </div>
  );
};

export default Biopsy;
