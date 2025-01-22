import React from 'react';

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
    marginBottom: '32px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '24px',
    color: '#6b7280',
  },
};

const EchoTest = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>What Is a 2D ECHO Test?</h2>
      <p style={styles.paragraph}>
        The 2D ECHO test uses high-frequency sound waves (ultrasound) to produce a moving image of the heart. The test involves a transducer that sends sound waves through the chest wall, which bounce back from the heart’s structures. These returning signals are converted into images on a monitor, providing insights into the heart’s anatomy and motion.
      </p>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Uses of the 2D ECHO Test</h3>
        <p style={styles.paragraph}>
          The 2D ECHO test serves multiple purposes, making it a cornerstone in cardiac diagnostics. Some of its most common uses include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Assessing Heart Function: Determines how well the heart is pumping blood (ejection fraction).</li>
          <li style={styles.listItem}>Diagnosing Valve Disorders: Detects stenosis or regurgitation in the heart valves.</li>
          <li style={styles.listItem}>Monitoring Heart Disease Progression: Tracks changes in heart size or function over time.</li>
          <li style={styles.listItem}>Detecting Congenital Defects: Identifies structural abnormalities present from birth.</li>
          <li style={styles.listItem}>Evaluating Chest Pain Causes: Helps diagnose the source of unexplained chest pain.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>How to Prepare for a 2D ECHO Test</h3>
        <p style={styles.paragraph}>
          Preparing for a 2D ECHO test is straightforward, as it is non-invasive and painless. Here are some key steps to ensure a smooth experience:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Clothing: Wear comfortable, loose-fitting clothes. You may need to remove your shirt during the test.</li>
          <li style={styles.listItem}>Dietary Restrictions: Typically, no fasting is required unless combined with other tests (e.g., stress echocardiogram).</li>
          <li style={styles.listItem}>Medications: Continue taking your prescribed medications unless instructed otherwise by your doctor.</li>
          <li style={styles.listItem}>Inform the Technician: Share any relevant medical history or ongoing symptoms.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>What Happens During the 2D ECHO Test?</h3>
        <p style={styles.paragraph}>
          The procedure is quick, usually lasting 15 to 30 minutes, and involves the following steps:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Positioning: You will lie on an examination table, usually on your left side.</li>
          <li style={styles.listItem}>Application of Gel: A technician applies a special gel to the chest area to improve sound wave transmission.</li>
          <li style={styles.listItem}>Use of Transducer: The transducer is moved across the chest to capture images of the heart from various angles.</li>
          <li style={styles.listItem}>Image Capture: Real-time images of the heart are displayed on a monitor, which the cardiologist analyzes.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Test Results Interpretation and Normal Range</h3>
        <p style={styles.paragraph}>
          Interpreting 2D ECHO test results requires a detailed analysis by a cardiologist. Here’s what the findings typically include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Ejection Fraction (EF): Measures the percentage of blood pumped out of the heart with each beat. A normal EF ranges from 50% to 70%.</li>
          <li style={styles.listItem}>Chamber Size and Wall Thickness: Abnormalities may indicate conditions such as hypertrophy or dilated cardiomyopathy.</li>
          <li style={styles.listItem}>Valve Function: Assesses whether the valves open and close properly.</li>
          <li style={styles.listItem}>Pericardial Effusion: Detects fluid buildup around the heart.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Advantages of the 2D ECHO Test</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Non-invasive and safe</li>
          <li style={styles.listItem}>No radiation exposure</li>
          <li style={styles.listItem}>Provides real-time heart images</li>
          <li style={styles.listItem}>Helps in early detection of heart conditions</li>
        </ul>
      </div>

      <div style={styles.footer}>
        <p style={styles.note}>Note: Always consult with your healthcare provider for personalized advice.</p>
      </div>
    </div>
  );
};

export default EchoTest;
