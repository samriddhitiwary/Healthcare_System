import React from 'react';


const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#007bff',
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  paragraph: {
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  cardContent: {
    marginBottom: '15px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    fontSize: '0.875rem',
    color: '#888',
  },
};

const Angiogram = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>What is an Angiogram?</h2>
      <p style={styles.paragraph}>
        An angiogram, also known as angiography, is a specialized imaging test that visualizes blood vessels to assess their health and functionality.
      </p>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>How It Works:</h3>
        <p style={styles.cardContent}>
          A contrast dye is injected into the bloodstream to enhance the visibility of blood vessels on imaging equipment.
        </p>
        <h3 style={styles.cardTitle}>Purpose:</h3>
        <p style={styles.cardContent}>
          The test helps detect issues like arterial blockages, blood clots, or structural abnormalities.
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Why is an Angiogram Important?</h3>
        <p style={styles.cardContent}>
          Angiograms provide detailed information about blood vessel health, which is crucial for:
        </p>
        <ul style={{ ...styles.cardContent, paddingLeft: '20px' }}>
          <li>Diagnosing Vascular Conditions: Identifies blockages, aneurysms, or narrowing in arteries and veins.</li>
          <li>Treatment Planning: Helps guide interventions such as angioplasty, stent placement, or surgery.</li>
          <li>Monitoring Progress: Evaluates the effectiveness of treatments for vascular diseases.</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Types of Angiograms</h3>
        <p style={styles.cardContent}>
          There are several types of angiograms, each tailored to specific parts of the body:
        </p>
        <ul style={{ ...styles.cardContent, paddingLeft: '20px' }}>
          <li>Coronary Angiogram: Examines the arteries of the heart to diagnose coronary artery disease.</li>
          <li>Cerebral Angiogram: Evaluates blood vessels in the brain to detect aneurysms or stroke risk.</li>
          <li>Pulmonary Angiogram: Assesses blood flow in the lungs, often for detecting pulmonary embolism.</li>
          <li>Renal Angiogram: Examines the blood supply to the kidneys.</li>
          <li>Peripheral Angiogram: Looks at blood vessels in the arms, legs, or other extremities.</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>How is an Angiogram Performed?</h3>
        <p style={styles.cardContent}>
          The angiogram procedure typically involves the following steps:
        </p>
        <ol style={{ ...styles.cardContent, paddingLeft: '20px' }}>
          <li>Preparation: The patient lies on an examination table, and a local anesthetic is applied to the site where the catheter will be inserted (usually the wrist or groin).</li>
          <li>Catheter Insertion: A thin, flexible tube (catheter) is inserted into a blood vessel and guided to the area of interest using imaging equipment.</li>
          <li>Dye Injection: Contrast dye is injected through the catheter to highlight the blood vessels.</li>
          <li>Imaging: X-rays, CT scans, or MRIs capture detailed images of the blood vessels.</li>
          <li>Completion: The catheter is removed, and pressure is applied to the insertion site to prevent bleeding.</li>
        </ol>
      </div>

      <div style={styles.footer}>
        <p>For more information, consult with a healthcare professional.</p>
      </div>
    </div>
  );
};

export default Angiogram;
