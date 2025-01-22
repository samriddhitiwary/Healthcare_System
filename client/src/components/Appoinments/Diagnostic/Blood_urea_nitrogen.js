import React from 'react';

const BloodUreaNitrogen = () => {
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
      <h1 style={styles.heading}>What Is a Blood Urea Nitrogen (BUN) Test?</h1>
      <p style={styles.paragraph}>
        The BUN test measures the level of urea nitrogen in your blood. Urea nitrogen is produced during the breakdown of protein in the liver. It travels through the blood to the kidneys, which filter it out in urine. Abnormal BUN levels can indicate issues with the liver, kidneys, or overall metabolism.
      </p>
      <p style={styles.paragraph}>
        The test evaluates how well your kidneys are functioning and may also provide insights into liver health or dehydration.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Purpose of the BUN Test</h2>
        <p style={styles.paragraph}>
          The BUN test is an essential diagnostic tool for several reasons:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Assessing kidney function and detecting kidney diseases.</li>
          <li style={styles.listItem}>Diagnosing liver issues affecting urea production.</li>
          <li style={styles.listItem}>Monitoring dehydration or fluid levels in the body.</li>
          <li style={styles.listItem}>Tracking chronic conditions like diabetes or high blood pressure.</li>
          <li style={styles.listItem}>Pre-surgical evaluation to ensure proper kidney function.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How is the BUN Test Performed?</h2>
        <p style={styles.paragraph}>
          The BUN test is a simple blood test performed in a medical setting:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>A blood sample is drawn from a vein in your arm.</li>
          <li style={styles.listItem}>The sample is sent to a lab to measure urea nitrogen levels.</li>
          <li style={styles.listItem}>Test results are typically available within a day.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Normal Range for BUN Levels</h2>
        <p style={styles.paragraph}>
          Normal BUN levels vary depending on age, sex, and overall health:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Adults: 6–20 mg/dL.</li>
          <li style={styles.listItem}>Children: 5–18 mg/dL.</li>
          <li style={styles.listItem}>Elderly: Slightly higher levels may be normal due to reduced kidney function.</li>
        </ul>
        <p style={styles.note}>
          Note: Always consult your healthcare provider for accurate interpretation of results.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Interpreting BUN Test Results</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Normal results indicate healthy kidney function.</li>
          <li style={styles.listItem}>High BUN levels may indicate dehydration, kidney disease, or high protein intake.</li>
          <li style={styles.listItem}>Low BUN levels may indicate liver disease, malnutrition, or overhydration.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How to Prepare for a BUN Test</h2>
        <p style={styles.subheading}>Before the Test:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>No fasting is generally required.</li>
          <li style={styles.listItem}>Avoid high-protein meals before the test.</li>
        </ul>
        <p style={styles.subheading}>During the Test:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Sit comfortably while the blood is drawn.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>FAQs About the BUN Test</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>What is the purpose of the BUN test?</li>
          <li style={styles.listItem}>Is fasting required for the BUN test?</li>
          <li style={styles.listItem}>What does a high BUN level indicate?</li>
          <li style={styles.listItem}>What does a low BUN level mean?</li>
        </ul>
      </div>
    </div>
  );
};

export default BloodUreaNitrogen;
