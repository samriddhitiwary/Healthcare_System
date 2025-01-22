import React from 'react';

const BloodPressureTest = () => {
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
      <h1 style={styles.heading}>What Is a Blood Pressure Test?</h1>
      <p style={styles.paragraph}>
        The machine used to measure blood pressure is called a sphygmomanometer. It comprises an instrument called a manometer, along with a cuff tied around a patient’s arm and inflated with air. In earlier versions of the machine, the pulse rate was detected with the help of a stethoscope, but digital blood pressure monitors that are available in the market are able to measure the pulse rate as well.
      </p>
      <p style={styles.paragraph}>
        The digital blood pressure machine works automatically to record the patient’s blood pressure, and pulse rate when its cuff is tied to the upper arm of a patient and the device is switched on. Hence, it is now easier for you to check your blood pressure at home.
      </p>
      <p style={styles.paragraph}>
        Men and women over the age of 40 should undergo blood pressure tests more frequently than younger people. Likewise, patients suffering from cardiac ailments or other serious diseases should check their blood pressure levels regularly.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Risk Factors Associated With a Blood Pressure Test</h2>
        <p style={styles.paragraph}>
          A blood pressure test is a quick and straightforward procedure, which causes no pain while measuring. The inflated cuff is used to squeeze the arm for a few seconds, which may hurt the muscles, mainly in older and weaker people.
        </p>
        <p style={styles.paragraph}>
          However, this pain disappears once the cuff is taken out of the arm. Therefore, blood pressure measurement is a risk-free diagnostic test that can be availed by all, irrespective of their ages and health conditions.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Preparations for the Blood Pressure Test</h2>
        <p style={styles.subheading}>Before the Test:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>You don’t need any special prep for a blood pressure test.</li>
          <li style={styles.listItem}>However, doctors may ask their patients not to smoke or drink any caffeine-rich beverage at least 1 hour before the test is conducted.</li>
          <li style={styles.listItem}>It is better to wear a shirt or a top with short sleeves so that the machine’s cuff can be tied easily on your upper arm.</li>
        </ul>

        <p style={styles.subheading}>During the Test:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Sit comfortably on a chair and relax for a few minutes before starting this test.</li>
          <li style={styles.listItem}>If you’re currently taking any medicine for other ailments, inform your doctor.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What to Expect from the Blood Pressure Test</h2>
        <p style={styles.paragraph}>
          You need to sit on a chair so that your feet may rest comfortably on the floor. You need to stretch your arm on a table, making sure that the hand lies at the same level as your heart. A technician or nurse will then tie the cuff tightly around your upper arm, which stretches up to your elbow.
        </p>
        <p style={styles.paragraph}>
          The cuff of the digital blood pressure machine inflates automatically once the device is switched on. The inflated cuff will squeeze your arm very hard to stop the normal blood flow for a second through the brachial artery, which runs through the upper arm.
        </p>
        <p style={styles.paragraph}>
          The entire procedure completes in only 1 minute, and it should be repeated at least thrice to determine whether the patient is suffering from high or low blood pressure.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Possible Results of a Blood Pressure Test</h2>
        <p style={styles.paragraph}>
          The normal blood pressure of an adult person should be around 120/80 mm Hg. The first number is the systolic pressure that denotes the pressure created as the heart squeezes to pump blood to the arteries. The second number is the diastolic pressure that signifies the blood pressure between 2 consecutive heartbeats.
        </p>
        <p style={styles.paragraph}>
          If the blood pressure is below 90/60 mm Hg, the patient suffers from low blood pressure. If a person’s blood pressure is above 130/85 mm Hg, they suffer from hypertension. The severity of hypertension is categorized into hypertension 1 and hypertension 2, based on the higher values of systolic and diastolic pressure.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>When to See a Doctor?</h2>
        <p style={styles.paragraph}>
          If your blood pressure is found to be more than 180/120 mm Hg, you should call a doctor immediately. Your vital internal organs may fail to function properly, leading to a fatal situation. You may experience breathing trouble, acute chest pain, back pain, numbness in your limb muscles, blurred vision, and speech problems.
        </p>
        <p style={styles.paragraph}>
          You should also see a doctor when your blood pressure monitor reads your BP well below 90/60 mm Hg. Too low blood pressure will make you feel dizzy and even faint.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Conclusion</h2>
        <p style={styles.paragraph}>
          Patients suffering from high blood pressure should purchase a digital blood pressure machine to check their blood pressure and pulse rate at home. The blood pressure test is simple yet essential and can save you from many other complications.
        </p>
      </div>
    </div>
  );
};

export default BloodPressureTest;
