import React from 'react';

const Afp_test = () => {
  
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

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What is an AFP Test (Alpha-Fetoprotein)?</h1>
      <p style={styles.paragraph}>
        The AFP Test measures the concentration of alpha-fetoprotein in the blood. This protein is naturally present in high levels in a developing fetus and gradually decreases after birth.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why is the AFP Test Important?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Prenatal Screening:</strong> Identifies risks for neural tube defects, chromosomal abnormalities like Down syndrome, or abdominal wall defects in the fetus.
          </li>
          <li style={styles.listItem}>
            <strong>Cancer Detection:</strong> Detects and monitors liver cancer, germ cell tumors, or other malignancies.
          </li>
          <li style={styles.listItem}>
            <strong>Liver Health Monitoring:</strong> Evaluates liver function and detects non-cancerous liver conditions.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How is the AFP Test Performed?</h2>
        <ol style={styles.list}>
          <li style={styles.listItem}>A healthcare provider draws a small sample of blood, typically from a vein in the arm.</li>
          <li style={styles.listItem}>The sample is analyzed in a lab to measure AFP levels.</li>
          <li style={styles.listItem}>Results are typically available within a few days.</li>
        </ol>
        <p style={styles.note}>
          Note: For pregnant women, the test is usually conducted between the 15th and 20th weeks of gestation.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Interpreting AFP Test Results</h2>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={styles.subheading}>For Pregnant Women:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>High AFP Levels:</strong> May indicate neural tube defects like spina bifida, abdominal wall defects, or multiple pregnancies.
            </li>
            <li style={styles.listItem}>
              <strong>Low AFP Levels:</strong> Could suggest chromosomal abnormalities like Down syndrome or Edwards syndrome.
            </li>
          </ul>
        </div>
        <div>
          <h3 style={styles.subheading}>For Non-Pregnant Adults:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Elevated Levels:</strong> May indicate liver cancer, germ cell tumors, or chronic liver conditions.
            </li>
            <li style={styles.listItem}>
              <strong>Normal or Low Levels:</strong> Typically rule out conditions associated with high AFP levels.
            </li>
          </ul>
        </div>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>FAQs About the AFP Test</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>What is the purpose of the AFP test?</strong> Measures alpha-fetoprotein levels to screen for birth defects, liver cancer, or liver health issues.</li>
          <li style={styles.listItem}><strong>When is the AFP test performed?</strong> Typically conducted between 15–20 weeks of pregnancy for prenatal screening.</li>
          <li style={styles.listItem}><strong>Is fasting required?</strong> No fasting is needed before the AFP test.</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>
          The AFP Test is a valuable diagnostic tool for prenatal care, cancer detection, and liver health monitoring. Consult your healthcare provider for personalized advice.
        </p>
      </footer>
    </div>
  );
};

export default Afp_test;
