import React from 'react'

const Cancer_screening = () => {
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
      <h1 style={styles.heading}>Cancer Screening</h1>
      <p style={styles.paragraph}>
        Cancer screening is looking for cancer before a person has any symptoms. If a cancer is found early on a screening test, it may be easier to treat or cure. Once cancer becomes symptomatic, nine out of ten times, it is too late.
      </p>
      <p style={styles.paragraph}>
        There are very few cancers, which can actually be screened and detected much early. Fortunately, the two most common and deadly cancers, which affect women, can be picked up very early on screening tests. In fact, the most common cancer in women in India, cancer of the cervix (lower part of the uterus), which kills a woman every 8 minutes, can be almost completely prevented with a vaccine (HPV vaccine) and a Pap test.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Who Needs Cancer Screening?</h2>
        <p style={styles.paragraph}>
          Cancer screening is both for people at high-risk and average risk of developing the above-mentioned cancers. Screening tests are usually done when one has no cancer symptoms.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subheading}>Types of Cancers That Can Be Screened:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Breast Cancer: Screening with mammography (X-ray) is recommended for all women aged 50 to 74.</li>
          <li style={styles.listItem}>Cervical Cancer: A Pap smear is recommended for all women (who have been sexually active) aged 21-65. One Pap test every 3 years is adequate.</li>
          <li style={styles.listItem}>Colon Cancer: Screening is recommended once a year for all adults from age 50 until 75.</li>
        </ul>
      </div>

      <div style={styles.note}>
        <p>Remember, cancer screening tests are not for diagnosing cancer, but for identifying potential risks and helping to treat it early.</p>
      </div>
    </div>
  );
};

export default Cancer_screening;
