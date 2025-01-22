import React from 'react';

const BasicMetabolicPanel = () => {
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Basic Metabolic Panel</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is a Basic Metabolic Panel?</h2>
        <p style={styles.paragraph}>
          A basic metabolic panel (BMP) is a test carried out to measure 8 substances in the blood. This test provides information about the chemical balance and metabolism of the body. Metabolism is the process in which the body uses food and energy. The BMP test measures the following substances:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Glucose</strong> – Helps to check blood sugar levels. Abnormal glucose levels may indicate issues.</li>
          <li style={styles.listItem}><strong>Calcium</strong> – Essential for nerve, muscle, and heart function. Also indicates parathyroid problems and kidney bone issues.</li>
          <li style={styles.listItem}><strong>Sodium, Potassium, Carbon Dioxide, and Chloride</strong> – Electrolytes that regulate fluid balance and acid-base balance in the body.</li>
          <li style={styles.listItem}><strong>Blood Urea Nitrogen (BUN) and Creatinine</strong> – Measures kidney function and nitrogen in the blood.</li>
        </ul>
        <p style={styles.paragraph}>
          Abnormal levels of any of these compounds can indicate a major health condition.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why is a Basic Metabolic Panel Used?</h2>
        <p style={styles.paragraph}>
          The BMP provides valuable insight into various body functions such as:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Blood filtration</li>
          <li style={styles.listItem}>Blood sugar levels</li>
          <li style={styles.listItem}>Electrolyte levels</li>
          <li style={styles.listItem}>Acid/base balance of the blood</li>
        </ul>
        <p style={styles.paragraph}>
          The BMP test can help identify potential issues with kidney, lung, or pancreatic function.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What are the Possible Risk Factors of BMP?</h2>
        <p style={styles.paragraph}>
          The process of drawing blood for the BMP test may involve some risks such as:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Lightheadedness</li>
          <li style={styles.listItem}>Hematoma – Accumulation of blood under the skin</li>
          <li style={styles.listItem}>Infection – Can be prevented with proper hygiene</li>
          <li style={styles.listItem}>Excessive bleeding – Needs immediate medical attention</li>
        </ul>
        <p style={styles.note}>
          If you experience prolonged bleeding or any other complications, consult a healthcare provider.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Do the Test Results Mean?</h2>
        <p style={styles.paragraph}>
          Test results can vary based on factors like age, gender, and health history. Normal ranges may differ by lab, but out-of-range results can indicate issues like dehydration, kidney problems, diabetes-related complications, or lung issues.
        </p>
        <p style={styles.paragraph}>
          If results are significantly abnormal, follow-up tests may be recommended by your doctor.
        </p>
      </section>
    </div>
  );
};

export default BasicMetabolicPanel;
