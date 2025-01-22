import React from 'react';

const AbdominalTest = () => {
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
            <h2 style={styles.heading}>Abdominal Ultrasound</h2>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>What is an Abdominal Ultrasound?</h3>
                <p style={styles.paragraph}>
                    An abdominal ultrasound is a medical imaging test that uses high-frequency sound waves to create real-time images of the abdominal organs. 
                    It is a safe and painless procedure commonly employed to examine organs such as the liver, gallbladder, kidneys, pancreas, spleen, and blood vessels.
                </p>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Uses of Abdominal Ultrasound</h3>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Evaluating Pain or Discomfort: Identifying the cause of unexplained abdominal pain or swelling.</li>
                    <li style={styles.listItem}>Detecting Gallstones or Kidney Stones: Assessing blockages or inflammation.</li>
                    <li style={styles.listItem}>Monitoring Pregnancy: Observing the fetus in early pregnancy stages.</li>
                    <li style={styles.listItem}>Diagnosing Conditions: Detecting liver disease, pancreatitis, or spleen enlargement.</li>
                    <li style={styles.listItem}>Guiding Medical Procedures: Assisting in needle placement for biopsies or fluid drainage.</li>
                    <li style={styles.listItem}>Assessing Blood Flow: Using Doppler ultrasound to evaluate blood flow in abdominal vessels.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>How to Prepare for an Abdominal Ultrasound</h3>
                <p style={styles.paragraph}>
                    Proper preparation is crucial for obtaining accurate results. Here’s how patients typically prepare:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Fasting: Avoid eating or drinking for 8–12 hours before the test to prevent gas or food in the digestive tract from obscuring the images.</li>
                    <li style={styles.listItem}>Medications: Take prescribed medications with minimal water unless advised otherwise by your doctor.</li>
                    <li style={styles.listItem}>Clothing: Wear loose, comfortable clothing, and you may need to change into a hospital gown.</li>
                    <li style={styles.listItem}>Special Instructions: Follow any additional instructions provided by your healthcare provider for specific evaluations.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>What to Expect During the Procedure</h3>
                <p style={styles.paragraph}>
                    An abdominal ultrasound is simple and typically takes 15–30 minutes. Here’s what happens:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Positioning:</strong> You’ll lie on your back or side on an examination table.</li>
                    <li style={styles.listItem}><strong>Application of Gel:</strong> A water-based gel is applied to your skin to ensure smooth transmission of sound waves.</li>
                    <li style={styles.listItem}><strong>Scanning:</strong> A handheld device called a transducer is moved across your abdomen. It emits sound waves and captures their echoes to generate images.</li>
                    <li style={styles.listItem}><strong>Real-Time Observation:</strong> The technician or radiologist views these images on a monitor to assess organ health and function.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Test Results Interpretation</h3>
                <p style={styles.paragraph}>
                    The results of an abdominal ultrasound are typically available within a few days. Here’s how to interpret the findings:
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Normal Range:</strong> Healthy organs appear with uniform textures and normal sizes. Blood flow in vessels should be unobstructed.</li>
                    <li style={styles.listItem}><strong>Abnormal Results:</strong> May indicate conditions like enlarged organs, tumors, cysts, gallstones, kidney stones, or fluid accumulation.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Benefits and Limitations</h3>
                <div style={styles.card}>
                    <h4 style={styles.subheading}>Benefits:</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Non-invasive and painless.</li>
                        <li style={styles.listItem}>Radiation-free, making it safe for all age groups, including pregnant women.</li>
                        <li style={styles.listItem}>Provides real-time imaging.</li>
                    </ul>
                </div>
                <div style={styles.card}>
                    <h4 style={styles.subheading}>Limitations:</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>May not detect small abnormalities in deep structures.</li>
                        <li style={styles.listItem}>Gas in the intestines can obscure images.</li>
                        <li style={styles.listItem}>Not suitable for evaluating bones or lungs.</li>
                    </ul>
                </div>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Patient-Focused FAQs About Abdominal Ultrasound</h3>
                <div style={styles.paragraph}>
                    <p><strong>1. What is an abdominal ultrasound used for?</strong> Abdominal ultrasounds are used to evaluate the health of organs like the liver, kidneys, gallbladder, and spleen, detecting issues such as stones, blockages, or inflammation.</p>
                    <p><strong>2. Do I need to fast before the procedure?</strong> Yes, fasting for 8–12 hours before the test is usually required. Check with your doctor for specific instructions.</p>
                    <p><strong>3. Is the procedure safe?</strong> Absolutely. Abdominal ultrasounds are non-invasive and do not involve radiation, making them safe for children and pregnant women.</p>
                    <p><strong>4. What should I wear to my appointment?</strong> Wear loose, comfortable clothing. You may need to change into a gown.</p>
                    <p><strong>5. How long does an abdominal ultrasound take?</strong> The procedure typically lasts 15–30 minutes.</p>
                    <p><strong>6. Can I drive myself home after the test?</strong> Yes, you can resume normal activities immediately after the test.</p>
                    <p><strong>7. Will the ultrasound detect cancer?</strong> It may identify abnormal growths, but further tests, like a biopsy or CT scan, may be necessary to confirm cancer.</p>
                    <p><strong>8. What happens if the results are abnormal?</strong> Your doctor will recommend further tests or treatments, such as blood tests, CT scans, or MRIs.</p>
                    <p><strong>9. Does an abdominal ultrasound hurt?</strong> No, it is completely painless. You may feel mild pressure as the transducer is moved.</p>
                    <p><strong>10. Can I eat or drink after the test?</strong> Yes, unless fasting was required. If so, you can eat afterward.</p>
                </div>
            </section>

            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Conclusion</h3>
                <p style={styles.paragraph}>
                    An abdominal ultrasound is a valuable diagnostic tool that provides safe, accurate insights into abdominal organ health. Understanding the procedure, preparation, and interpretation of results ensures a smooth experience for patients and optimal diagnostic outcomes.
                </p>
            </section>
        </div>
    );
};

export default AbdominalTest;
