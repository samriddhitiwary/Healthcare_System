import React from 'react';

const BiophysicalProfile = () => {
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
      <h1 style={styles.heading}>What is a Biophysical Profile (BPP)?</h1>
      <p style={styles.paragraph}>
        A Biophysical Profile (BPP) is a comprehensive prenatal test that evaluates a fetus’s health by assessing five key parameters:
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Fetal Breathing Movements:</h2>
        <p style={styles.paragraph}>Measures the baby’s practice breathing motions.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>2. Fetal Movement:</h2>
        <p style={styles.paragraph}>Observes physical movements, such as kicking or rolling.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Fetal Tone:</h2>
        <p style={styles.paragraph}>Evaluates muscle tone and whether the baby can flex and extend its limbs.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>4. Amniotic Fluid Volume:</h2>
        <p style={styles.paragraph}>Assesses the amount of amniotic fluid surrounding the fetus.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>5. Fetal Heart Rate (via Non-Stress Test):</h2>
        <p style={styles.paragraph}>Monitors heart rate in response to fetal movements.</p>
      </div>

      <p style={styles.paragraph}>
        Each parameter is scored as either 0 or 2, with a maximum total score of 10. A higher score indicates a healthier fetus.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Why is the Biophysical Profile Important?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Detect Fetal Distress: Identifies signs of oxygen deprivation or other complications.</li>
          <li style={styles.listItem}>Guide Delivery Decisions: Helps determine whether early delivery is necessary.</li>
          <li style={styles.listItem}>Monitor High-Risk Pregnancies: Assesses fetal health in conditions such as diabetes, preeclampsia, or intrauterine growth restriction (IUGR).</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>How is the Biophysical Profile Performed?</h2>
        <p style={styles.paragraph}>The BPP is a two-part test conducted in a clinical setting:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Ultrasound Examination: The technician uses an ultrasound probe to visualize the fetus. Observes fetal breathing, movement, tone, and amniotic fluid volume.</li>
          <li style={styles.listItem}>Non-Stress Test (NST): The mother is connected to a fetal monitor that records the baby’s heart rate and movement. An elastic belt with sensors is placed around the abdomen for 20–30 minutes.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Uses of the Biophysical Profile</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>High-Risk Pregnancies: Monitors pregnancies complicated by diabetes, hypertension, or IUGR.</li>
          <li style={styles.listItem}>Decreased Fetal Movement: Evaluates concerns about reduced activity.</li>
          <li style={styles.listItem}>Post-Term Pregnancies: Assesses the health of a baby beyond 40 weeks of gestation.</li>
          <li style={styles.listItem}>Previous Pregnancy Losses: Provides reassurance in subsequent pregnancies.</li>
          <li style={styles.listItem}>Multiple Pregnancies: Tracks fetal health in twins or triplets, particularly if one baby appears at risk.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Test Results Interpretation</h2>
        <p style={styles.paragraph}>
          The BPP results are scored on a scale of 0 to 10, with each parameter contributing up to 2 points:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>8–10: Normal; indicates a healthy fetus.</li>
          <li style={styles.listItem}>6: Borderline; may require additional monitoring or further testing.</li>
          <li style={styles.listItem}>4 or Below: Abnormal; suggests fetal distress or other concerns, often prompting immediate intervention.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Normal Range for Biophysical Profile Results</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Normal Score: 8–10, indicating no significant concerns.</li>
          <li style={styles.listItem}>Borderline Score (6): Requires close observation or follow-up testing.</li>
          <li style={styles.listItem}>Abnormal Score (4 or Below): May indicate the need for immediate action, such as early delivery.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>How to Prepare for a Biophysical Profile</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Hydration: Stay well-hydrated to ensure clear ultrasound imaging.</li>
          <li style={styles.listItem}>Eating: Have a light meal before the test to encourage fetal activity.</li>
          <li style={styles.listItem}>Comfortable Clothing: Wear loose, comfortable clothing for easy access to the abdomen.</li>
          <li style={styles.listItem}>Plan Ahead: Allocate 30–60 minutes for the procedure, depending on fetal cooperation.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>What to Expect During the Test</h2>
        <p style={styles.paragraph}>
          Ultrasound: You’ll lie on an examination table while the technician applies gel to your abdomen and moves the ultrasound probe to visualize the baby.
        </p>
        <p style={styles.paragraph}>
          Non-Stress Test: Elastic belts are wrapped around your abdomen to monitor fetal heart rate and movement. You may be asked to press a button when you feel the baby move.
        </p>
        <p style={styles.paragraph}>The process is non-invasive and painless, though some mothers may find the monitoring equipment slightly uncomfortable.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>FAQs About the Biophysical Profile (BPP)</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>What is a Biophysical Profile (BPP) used for?</li>
          <li style={styles.listItem}>Is the BPP test safe for the baby?</li>
          <li style={styles.listItem}>How long does a Biophysical Profile take?</li>
          <li style={styles.listItem}>What happens if my BPP score is abnormal?</li>
          <li style={styles.listItem}>Can I eat before the BPP test?</li>
          <li style={styles.listItem}>Is the BPP test painful?</li>
          <li style={styles.listItem}>When is a BPP test recommended?</li>
          <li style={styles.listItem}>How accurate is the BPP test?</li>
          <li style={styles.listItem}>What is the difference between a BPP and a Non-Stress Test (NST)?</li>
          <li style={styles.listItem}>How often is a BPP test performed?</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Conclusion</h2>
        <p style={styles.paragraph}>
          The Biophysical Profile (BPP) is a valuable prenatal tool for assessing fetal health and guiding care in high-risk pregnancies. By evaluating key parameters like breathing, movement, tone, amniotic fluid, and heart rate, the BPP provides a comprehensive picture of fetal well-being.
        </p>
        <p style={styles.paragraph}>
          Understanding the purpose, process, and interpretation of BPP results can help expectant mothers feel more confident and informed. If you have concerns about your pregnancy or have been recommended for a BPP, consult your healthcare provider for personalized advice and care.
        </p>
      </div>
    </div>
  );
};

export default BiophysicalProfile;
