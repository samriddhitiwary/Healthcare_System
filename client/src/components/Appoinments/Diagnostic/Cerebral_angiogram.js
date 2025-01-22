import React from 'react'

const Cerebral_angiogram = () => {
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
      <h1 style={styles.heading}>Cerebral Angiogram</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What is a Cerebral Angiogram?</h2>
        <p style={styles.paragraph}>
          A cerebral angiogram, also called a cerebral arteriogram, is an advanced diagnostic test designed to provide detailed images of the brain’s blood vessels.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>A catheter is inserted into a large artery, typically in the groin or wrist.</li>
          <li style={styles.listItem}>Contrast dye is injected into the blood vessels supplying the brain.</li>
          <li style={styles.listItem}>X-rays capture images as the dye travels through the cerebral arteries and veins, highlighting any abnormalities.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Purpose:</h2>
        <p style={styles.paragraph}>
          The test is essential for evaluating conditions that affect blood flow to the brain, such as strokes, aneurysms, and arteriovenous malformations (AVMs).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why is the Cerebral Angiogram Important?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Visualize Blood Flow: Offers precise images of arteries and veins in the brain and neck.</li>
          <li style={styles.listItem}>Identify Blockages: Detects clots or narrowing in the blood vessels.</li>
          <li style={styles.listItem}>Evaluate Vascular Malformations: Pinpoints issues like aneurysms or AVMs.</li>
          <li style={styles.listItem}>Plan Interventions: Guides treatments, including surgery or minimally invasive procedures.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How is a Cerebral Angiogram Performed?</h2>
        <p style={styles.paragraph}>
          The procedure involves several steps, performed under the care of a trained radiologist or neurologist:
        </p>
        <h3 style={styles.subheading}>Preparation:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>The patient is positioned on an X-ray table.</li>
          <li style={styles.listItem}>A sedative or mild anesthesia may be administered for relaxation.</li>
          <li style={styles.listItem}>The insertion site (groin or wrist) is cleaned and numbed with a local anesthetic.</li>
        </ul>

        <h3 style={styles.subheading}>Catheter Insertion:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>A small incision is made to insert a catheter into the femoral or radial artery.</li>
          <li style={styles.listItem}>The catheter is guided through the blood vessels to the arteries supplying the brain using fluoroscopy (real-time X-ray imaging).</li>
        </ul>

        <h3 style={styles.subheading}>Contrast Dye Injection:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Contrast dye is injected through the catheter, making the blood vessels visible on X-ray.</li>
          <li style={styles.listItem}>The patient may feel a brief warmth or flushing sensation.</li>
        </ul>

        <h3 style={styles.subheading}>Image Capture:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>A series of X-ray images are taken as the dye travels through the cerebral circulation.</li>
        </ul>

        <h3 style={styles.subheading}>Completion:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>The catheter is removed, and pressure is applied to the insertion site to prevent bleeding.</li>
          <li style={styles.listItem}>A bandage or closure device is applied, and the patient is monitored for a few hours.</li>
        </ul>
        <p style={styles.paragraph}>The procedure typically takes 30–60 minutes.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Uses of the Cerebral Angiogram</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Diagnosing Stroke: Identifies blockages or clots causing ischemic strokes.</li>
          <li style={styles.listItem}>Detecting Aneurysms: Pinpoints bulging or weakened areas in blood vessel walls.</li>
          <li style={styles.listItem}>Evaluating Arteriovenous Malformations (AVMs): Visualizes abnormal connections between arteries and veins.</li>
          <li style={styles.listItem}>Assessing Tumor Blood Supply: Maps blood vessels feeding brain tumors.</li>
          <li style={styles.listItem}>Guiding Interventional Procedures: Supports treatments like clot retrieval, stent placement, or aneurysm coiling.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Test Results Interpretation</h2>
        <h3 style={styles.subheading}>Normal Results:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Blood vessels appear smooth and unobstructed.</li>
          <li style={styles.listItem}>No evidence of blockages, aneurysms, or abnormal connections.</li>
        </ul>

        <h3 style={styles.subheading}>Abnormal Results:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Blockages or Narrowing: Suggests conditions like atherosclerosis or embolism.</li>
          <li style={styles.listItem}>Aneurysms: Reveals bulging areas that may require surgical repair or endovascular treatment.</li>
          <li style={styles.listItem}>Vascular Malformations: Highlights AVMs or fistulas that could cause complications.</li>
        </ul>
        <p style={styles.paragraph}>Your doctor will review the findings and recommend appropriate next steps based on the results.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Normal Range for Cerebral Angiogram Findings</h2>
        <p style={styles.paragraph}>
          There isn’t a specific “normal range” for a cerebral angiogram, as the test evaluates structural and functional characteristics of blood vessels. Key indicators of normal results include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Unobstructed blood flow through all major cerebral arteries.</li>
          <li style={styles.listItem}>No signs of vessel narrowing, blockages, or aneurysms.</li>
          <li style={styles.listItem}>Absence of abnormal vessel connections or leaks.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How to Prepare for a Cerebral Angiogram</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Fasting: Avoid eating or drinking for 6–8 hours before the test.</li>
          <li style={styles.listItem}>Medication Review: Inform your doctor about all medications, especially blood thinners or anti-inflammatory drugs, as you may need to stop them temporarily.</li>
          <li style={styles.listItem}>Allergy Disclosure: Mention any known allergies, particularly to contrast dye or iodine.</li>
          <li style={styles.listItem}>Hydration: Drink plenty of water the day before the procedure unless otherwise instructed.</li>
          <li style={styles.listItem}>Transportation: Arrange for someone to drive you home, as sedation may impair your ability to drive.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What to Expect During Recovery</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Post-procedure monitoring: You may need to stay in a recovery room for a few hours.</li>
          <li style={styles.listItem}>Rest: You may be asked to rest for 24–48 hours to reduce the risk of complications.</li>
          <li style={styles.listItem}>Hydration: Drink fluids to help flush out the contrast dye from your system.</li>
          <li style={styles.listItem}>Site Care: Keep the catheter insertion site clean and dry.</li>
        </ul>
        <p style={styles.note}>
          Contact your doctor if you experience severe pain, swelling, or redness at the insertion site, or any signs of complications.
        </p>
      </div>
    </div>
  );
}

export default Cerebral_angiogram;
