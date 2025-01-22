import React from 'react';

const Discogram = () => {
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
      <h1 style={styles.heading}>What is a Discogram?</h1>
      <p style={styles.paragraph}>
        A discogram is an advanced diagnostic test that involves injecting contrast dye into the spinal discs. The dye makes the discs visible on an X-ray or CT scan, helping to detect abnormalities.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Purpose</h2>
        <p style={styles.paragraph}>
          The test aims to reproduce back pain to identify the problematic disc. It also evaluates the structural integrity of the disc.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Procedure</h2>
        <p style={styles.paragraph}>
          A thin needle is inserted into the center of one or more spinal discs under X-ray guidance. Once the dye is injected, the patient’s response to the pressure is monitored, and images are captured.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why is a Discogram Important?</h2>
        <p style={styles.paragraph}>
          A discogram is vital for diagnosing chronic back pain that doesn’t respond to non-invasive treatments. It provides:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Specific Diagnosis:</strong> Identifies the exact disc causing pain.</li>
          <li style={styles.listItem}><strong>Pre-Surgical Assessment:</strong> Helps surgeons decide whether spinal surgery, such as a spinal fusion, is necessary.</li>
          <li style={styles.listItem}><strong>Complementary Information:</strong> Offers additional details that other imaging tests, like MRI or CT scans, may not provide.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How Does a Discogram Work?</h2>
        <p style={styles.paragraph}>
          The procedure involves several steps:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Preparation:</strong> The patient lies on an X-ray table. A local anesthetic is administered to numb the skin and muscles.</li>
          <li style={styles.listItem}><strong>Needle Placement:</strong> A thin needle is inserted into the disc space under X-ray guidance.</li>
          <li style={styles.listItem}><strong>Dye Injection:</strong> Contrast dye is injected into the disc. This may recreate pain if the disc is abnormal.</li>
          <li style={styles.listItem}><strong>Imaging:</strong> X-rays or a CT scan are taken to examine the disc’s structure and identify any damage or abnormalities.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Preparing for a Discogram</h2>
        <p style={styles.paragraph}>
          Proper preparation is essential for ensuring accurate results and a smooth experience:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Medication Review:</strong> Inform your doctor about all medications and supplements. You may need to stop taking blood thinners or anti-inflammatory drugs before the procedure.</li>
          <li style={styles.listItem}><strong>Fasting:</strong> Avoid eating or drinking for 6–8 hours before the test if sedatives will be used.</li>
          <li style={styles.listItem}><strong>Arrange Transportation:</strong> Sedation may impair your ability to drive, so arrange for someone to take you home.</li>
          <li style={styles.listItem}><strong>Clothing:</strong> Wear loose, comfortable clothing to the appointment.</li>
          <li style={styles.listItem}><strong>Medical History:</strong> Provide a detailed medical history, including previous spinal conditions or surgeries.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What to Expect During Recovery</h2>
        <p style={styles.paragraph}>
          After the procedure, you may experience mild soreness at the injection site. Recovery tips include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Rest:</strong> Avoid strenuous activities for at least 24 hours.</li>
          <li style={styles.listItem}><strong>Pain Relief:</strong> Use over-the-counter pain relievers or apply an ice pack to the injection site if needed.</li>
          <li style={styles.listItem}><strong>Follow-Up:</strong> Attend follow-up appointments to discuss results and next steps.</li>
        </ul>
      </div>

      <p style={styles.note}>Note: If you experience severe or persistent symptoms, such as fever or excessive pain, contact your doctor immediately.</p>
    </div>
  );
};

export default Discogram;
