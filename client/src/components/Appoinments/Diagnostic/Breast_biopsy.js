import React from 'react';

const BreastBiopsy = () => {
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
      <h1 style={styles.heading}>Breast Biopsy</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview</h2>
        <p style={styles.paragraph}>
          A biopsy is a method of extracting some cells or tissues from your body for examination. If you notice a lump, a bulging mass, or swelling in your breast, in order to confirm the nature of the lump, especially if it is benign or malignant, you need to have a biopsy of the breast.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>About Breast Biopsy</h2>
        <p style={styles.paragraph}>
          A breast biopsy is a procedure of removing a small piece of tissue from the breast. The pathologist evaluates the suspicious area of the breast in a laboratory under a microscope. The doctor uses this procedure to study the cells causing breast lumps.
        </p>
        <p style={styles.paragraph}>
          <strong>Request an appointment at Apollo Hospitals</strong>
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Who Qualifies for Breast Biopsy?</h2>
        <p style={styles.paragraph}>
          You must inform your doctor about your medical history and present conditions before undergoing a breast biopsy. In particular, you need to inform your doctor:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>If you suffer from any allergic reactions.</li>
          <li style={styles.listItem}>If you have consumed aspirin in the past few days as a pain-reliever.</li>
          <li style={styles.listItem}>If you are taking anticoagulants (blood-thinning medicines).</li>
          <li style={styles.listItem}>If you cannot lie on your stomach for a long time.</li>
          <li style={styles.listItem}>If you have a pacemaker or any electronic device implanted in your body, you cannot undergo MRI (Magnetic Resonance Imaging).</li>
          <li style={styles.listItem}>If you are pregnant or think that you might be pregnant.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why is Breast Biopsy Conducted?</h2>
        <p style={styles.paragraph}>
          There are various signs associated with breast tumours that need a breast biopsy:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>If the doctor finds some alterations in the breast during an examination, mammogram, or ultrasound.</li>
          <li style={styles.listItem}>If you feel a lump, thickening, or swollen mass in your breast.</li>
          <li style={styles.listItem}>If you notice masses filled with fluids or cysts in your breast.</li>
          <li style={styles.listItem}>If you observe changes in the nipples or blood discharge.</li>
          <li style={styles.listItem}>If the skin of the breast displays crusting, scaling, or dimpling.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Different Types of Breast Biopsy</h2>
        <p style={styles.paragraph}>
          There are different types of breast biopsies depending on the change in the breast and the extent of the change. Some types of breast biopsies are:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Fine Needle Aspiration (FNA) Biopsy: In fine needle aspiration biopsy, a very thin and hollow needle is used to draw fluid and breast tissue from the suspicious area.</li>
          <li style={styles.listItem}>Core Needle Biopsy: This is the most preferred form of biopsy when breast cancer is suspected. A larger needle is used to extract a sample.</li>
          <li style={styles.listItem}>Ultrasound-guided Core Needle Biopsy: This type uses ultrasound to guide the needle for sample collection.</li>
          <li style={styles.listItem}>Stereotactic Biopsy: In this method, a mammogram is used to detect the mass, followed by the insertion of a needle or vacuum probe to remove tissue.</li>
          <li style={styles.listItem}>Surgical Biopsy: The surgeon removes the entire abnormal mass and surrounding tissue.</li>
          <li style={styles.listItem}>Lymph Node Biopsy: This is performed along with or after the breast biopsy to check for the spread of cancer.</li>
          <li style={styles.listItem}>Vacuum-assisted Breast Biopsy: A suction device is used to collect tissue instead of a needle.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>After Breast Biopsy</h2>
        <p style={styles.paragraph}>
          After a breast biopsy, you may experience bruising, pain, and swelling at the biopsy site. An ice pack can help relieve some of the discomfort. The doctor may also suggest pain-relieving medication. In a surgical biopsy, sutures will need to be taken care of, and special bras or dressings may be recommended for a few days to reduce discomfort.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Benefits</h2>
        <p style={styles.paragraph}>
          A breast biopsy is the best way to diagnose abnormalities in the breast tissue. If performed timely, it can help in detecting breast cancer in its early stages. If the tumor is benign, treatment options will be provided.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Risks or Complications Associated with Breast Biopsy</h2>
        <p style={styles.paragraph}>
          Although breast biopsy is generally safe, some risks include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Mild pain in the breast.</li>
          <li style={styles.listItem}>Swelling and bruising of the breast.</li>
          <li style={styles.listItem}>Bleeding.</li>
          <li style={styles.listItem}>Fever or chills.</li>
          <li style={styles.listItem}>Infection at the biopsy site.</li>
          <li style={styles.listItem}>Changes in the appearance of the breast.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Conclusion</h2>
        <p style={styles.paragraph}>
          Pathologists may take several days to provide the results. If the reports indicate cancerous tissue, the doctor will guide you on the next steps for treatment. A breast biopsy is one of the safest ways to detect breast cancer, and early diagnosis can prevent the disease from spreading further.
        </p>
        <p style={styles.paragraph}>
          <strong>For more details about breast biopsy:</strong>
        </p>
        <p style={styles.paragraph}>
          Request an appointment at Apollo Hospitals.
        </p>
        <p style={styles.paragraph}>
          Call 1860-500-1066 to book an appointment.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Is the breast biopsy procedure painful?</li>
          <li style={styles.listItem}>How long will it take to recover from a breast biopsy?</li>
          <li style={styles.listItem}>What should I avoid doing after a breast biopsy?</li>
          <li style={styles.listItem}>Can I drive after a breast biopsy?</li>
          <li style={styles.listItem}>What is the difference between ultrasound-guided core needle biopsy and stereotactic-guided core needle biopsy?</li>
        </ul>
      </div>
    </div>
  );
};

export default BreastBiopsy;
