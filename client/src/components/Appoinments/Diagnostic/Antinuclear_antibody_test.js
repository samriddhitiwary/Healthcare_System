import React from 'react';

const AntinuclearAntibodyTest = () => {
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
      marginBottom: '24px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Antinuclear Antibody Test</h2>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>What is an Antinuclear Antibody Test?</h3>
        <p style={styles.paragraph}>
          The ANA Test measures the level of antinuclear antibodies in your blood.
        </p>
        <p style={styles.paragraph}>
          <strong>Antinuclear Antibodies:</strong> These are proteins produced by the immune system that mistakenly target and attack the nucleus of cells, leading to inflammation and tissue damage.
        </p>
        <p style={styles.paragraph}>
          <strong>Purpose:</strong> The test is primarily used to diagnose autoimmune diseases or to rule out such conditions in patients with symptoms like joint pain, fatigue, or unexplained fever.
        </p>
        <p style={styles.paragraph}>
          The ANA Test is often the first step in diagnosing autoimmune disorders, as it provides a general indication of immune system activity.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Why is the ANA Test Important?</h3>
        <p style={styles.paragraph}>
          The ANA Test plays a crucial role in diagnosing and managing autoimmune diseases. It helps:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Detect Autoimmune Activity: Identifies the presence of antinuclear antibodies, which indicate autoimmune activity.</li>
          <li style={styles.listItem}>Guide Further Testing: A positive ANA result often prompts more specific tests to confirm a diagnosis.</li>
          <li style={styles.listItem}>Monitor Disease Progression: Helps track the progression of autoimmune conditions and the effectiveness of treatments.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>How is the ANA Test Performed?</h3>
        <p style={styles.paragraph}>
          The ANA Test is a simple blood test performed in a healthcare setting:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Blood Sample Collection: A healthcare provider draws a small blood sample from a vein in your arm.</li>
          <li style={styles.listItem}>Laboratory Analysis: The sample is analyzed using techniques like indirect immunofluorescence or enzyme-linked immunosorbent assay (ELISA).</li>
          <li style={styles.listItem}>Results Reporting: Results are reported as a titer, which indicates the concentration of antibodies in the blood, and a staining pattern, which provides clues about specific autoimmune conditions.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Uses of the Antinuclear Antibody Test</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Systemic Lupus Erythematosus (SLE): A positive ANA result is a hallmark of lupus, although further testing is needed for confirmation.</li>
          <li style={styles.listItem}>Rheumatoid Arthritis: Detects autoimmune activity that may contribute to joint inflammation.</li>
          <li style={styles.listItem}>Sjögren’s Syndrome: Helps identify antibodies associated with this condition, which affects moisture-producing glands.</li>
          <li style={styles.listItem}>Scleroderma: Assists in diagnosing this disease that causes skin and connective tissue hardening.</li>
          <li style={styles.listItem}>Other Conditions: May indicate autoimmune thyroid disease, mixed connective tissue disease, or drug-induced lupus.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Interpreting ANA Test Results</h3>
        <p style={styles.paragraph}>
          The results of the ANA Test are reported as:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Titer: Indicates the concentration of antibodies in the blood. Common thresholds include:
            <ul style={styles.list}>
              <li style={styles.listItem}>Negative: No significant level of antinuclear antibodies detected.</li>
              <li style={styles.listItem}>Low Titer (1:40 to 1:80): May be normal or indicate mild autoimmune activity.</li>
              <li style={styles.listItem}>High Titer (1:160 or above): Suggests significant autoimmune activity and warrants further testing.</li>
            </ul>
          </li>
          <li style={styles.listItem}>Staining Pattern: Refers to how the antibodies bind to cells under a microscope. Common patterns include:
            <ul style={styles.list}>
              <li style={styles.listItem}>Homogeneous: Associated with lupus or drug-induced lupus.</li>
              <li style={styles.listItem}>Speckled: Linked to Sjögren’s syndrome or mixed connective tissue disease.</li>
              <li style={styles.listItem}>Nucleolar: Suggestive of scleroderma or systemic sclerosis.</li>
              <li style={styles.listItem}>Centromere: Often seen in limited scleroderma (CREST syndrome).</li>
            </ul>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Normal Range for ANA Test Results</h3>
        <p style={styles.paragraph}>
          <strong>Negative Result:</strong> Indicates no significant presence of antinuclear antibodies and is considered normal.
        </p>
        <p style={styles.paragraph}>
          <strong>Positive Result:</strong> A positive result alone does not confirm an autoimmune disease but signals the need for further evaluation.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>How to Prepare for an ANA Test</h3>
        <p style={styles.paragraph}>
          Preparing for the ANA Test is straightforward:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>No Fasting Required: You can eat and drink normally before the test.</li>
          <li style={styles.listItem}>Medication Disclosure: Inform your doctor about any medications, including over-the-counter drugs or supplements, as they may affect test results.</li>
          <li style={styles.listItem}>Medical History: Provide details about symptoms or a family history of autoimmune diseases to help guide interpretation.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>What to Expect During and After the Test</h3>
        <p style={styles.paragraph}>
          <strong>During the Test:</strong> The blood draw is quick and relatively painless, lasting just a few minutes.
        </p>
        <p style={styles.paragraph}>
          <strong>After the Test:</strong> You can resume normal activities immediately. Minor bruising or soreness at the puncture site may occur.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Limitations of the ANA Test</h3>
        <p style={styles.paragraph}>
          While the ANA Test is a valuable tool, it has some limitations:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>False Positives: A positive result does not always indicate disease, as some healthy individuals, particularly older adults, may test positive.</li>
          <li style={styles.listItem}>Non-Specific: A positive result suggests autoimmune activity but does not pinpoint a specific disease.</li>
          <li style={styles.listItem}>Further Testing Required: Additional tests, such as anti-dsDNA or anti-Smith antibodies, are often needed for a definitive diagnosis.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>FAQs About the Antinuclear Antibody Test</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>What is the ANA Test used for?</strong> The ANA Test detects antinuclear antibodies in the blood, which may indicate autoimmune activity. It is primarily used to diagnose or rule out autoimmune diseases like lupus, Sjögren’s syndrome, or rheumatoid arthritis.</li>
          <li style={styles.listItem}><strong>Can a positive ANA test mean I have lupus?</strong> A positive ANA test can indicate lupus, but it is not definitive. Other tests and clinical evaluation are required for a diagnosis.</li>
        </ul>
      </section>
      
      <div style={styles.note}>
        Note: Always consult with your doctor for proper interpretation of test results and diagnosis.
      </div>
    </div>
  );
};

export default AntinuclearAntibodyTest;
