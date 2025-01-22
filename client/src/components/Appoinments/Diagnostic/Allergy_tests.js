import React from 'react';

const AllergyTests = () => {
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
    note: {
      marginTop: '16px',
      fontStyle: 'italic',
      color: '#4b5563',
    },
    subheading: {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#374151',
    },
    card: {
      backgroundColor: '#eff6ff',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '24px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Allergy Tests</h2>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Overview</h3>
        <p style={styles.paragraph}>
          An allergy is the reaction of the body to certain substances that we consume, breathe in, or touch. An allergy test is performed to find out the substance causing the allergy.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>When It's Done</h3>
        <p style={styles.paragraph}>
          The test is performed to find out the specific substance that causes allergic symptoms such as hives, dermatitis, asthma, red itchy eyes, pain in the stomach, and nasal congestion. The test may also sometimes be used to monitor the effectiveness of the treatment.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Tests Available for Allergy Testing</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Skin Prick or Scratch Tests</li>
          <li style={styles.listItem}>Patch Tests</li>
          <li style={styles.listItem}>Intradermal Skin Test</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>When to Avoid</h3>
        <p style={styles.paragraph}>
          There are certain medicines that may interfere with the test results. Please consult your doctor before undergoing an allergy test if you are taking any medications.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>How to Prepare</h3>
        <p style={styles.paragraph}>
          You just have to be prepared to answer your doctor on the following questions:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Where you live and work</li>
          <li style={styles.listItem}>Any past or present illnesses</li>
          <li style={styles.listItem}>What kind of lifestyle you follow</li>
          <li style={styles.listItem}>Diet and eating habits</li>
        </ul>
        <p style={styles.paragraph}>
          No other special preparation is needed.
        </p>
      </section>
    </div>
  );
};

export default AllergyTests;
