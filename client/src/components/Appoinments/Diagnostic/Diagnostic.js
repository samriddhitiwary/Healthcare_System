import React, { useState } from 'react';
import Header from '../../Header/Header';
import ClinicCarousel from '../../Carousel/Carousel';
import './Diagnostic.css';

const Diagnostic = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const data = [
        { title: '2D Echo Test', view: '/2d-echo-test' },
        { title: 'Abdominal Ultrasound', view: '/abdominal-ultrasound' },
        { title: 'AFP Test (Alpha-Fetoprotein): Purpose, Procedure, Risks, and Benefits', view: '/afp-test' },
        { title: 'All You Need to Know About Discogram', view: '/discogram' },
        { title: 'Allergy Tests', view: '/allergy-tests' },
        { title: 'Angiogram: What is it? Why is it performed?', view: '/angiogram' },
        { title: 'Ankle Brachial Index (ABI): Test Procedure. Results and Benefits', view: '/ankle-brachial-index' },
        { title: 'Antinuclear Antibody Test', view: '/antinuclear-antibody-test' },
        { title: 'Basic Metabolic Panel (BMP): What It Is, Risk Factors & Results', view: '/basic-metabolic-panel' },
        { title: 'Bilirubin Test', view: '/bilirubin-test' },
        { title: 'Biophysical Profile (BPP): Test. Preparations. Results and Risk Factors', view: '/biophysical-profile' },
        { title: 'Biopsy', view: '/biopsy' },
        { title: 'Blood Pressure Test', view: '/blood-pressure-test' },
        { title: 'Blood Urea Nitrogen (BUN Test): Preparation, Results & Risk Factors', view: '/blood-urea-nitrogen' },
        { title: 'Breast Biopsy: Everything You Need to Know - Apollo Hospital Blog', view: '/breast-biopsy' },
        { title: 'Can Cancer Screening Test Save Your Life? - Facts & Overview', view: '/cancer-screening' },
        { title: 'Cerebral Angiogram: Why is it Prescribed. Procedure and Preparation', view: '/cerebral-angiogram' },
    ];

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleMouseEnter = (e) => {
        e.target.play();
    };

    const handleMouseLeave = (e) => {
        e.target.pause();
    };

    return (
        <div>
            <Header />
            <ClinicCarousel />
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Search diagnostics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />
            </div>
            <div className="diagnostic-container">
                <div className="table-container">
                    <table className="diagnostic-table">
                        <thead>
                            <tr>
                                <th>TITLE</th>
                                <th>VIEW</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>
                                        <a href={item.view} className="view-link">View</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="video-column">
                    <h3>Related Videos</h3>
                    <video
                        muted
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="video-player"
                    >
                        <source src="/videos/v2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video
                        muted
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="video-player"
                    >
                        <source src="/videos/v1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video
                        muted
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="video-player"
                    >
                        <source src="/videos/v3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Diagnostic;
