import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'La Fondation Dassault Systèmes',
    title: 'AI and ML Intern, Academic Project',
    date: 'August 2024 – April 2025',
    details: [
      'Developed a multipurpose AI-powered quadcopter for agriculture and surveillance.',
      'Integrated YOLOv11-based object detection, crop classification, and weed recognition with over 95% accuracy.',
      'Contributed to mechanical and electrical integration with interdisciplinary teams; prototype approved for real-world deployment.'
    ]
  },
  {
    company: 'Turing TechLabs',
    title: 'Software Development Intern',
    date: 'May 2024 – July 2024',
    details: [
      'Developed a web app using Django and React, integrating ML & DL models for vitiligo detection.',
      'Implemented authentication, image upload, and a multifaceted questionnaire.',
      'Automated report generation and email delivery to support real-time disease detection.'
    ]
  }
];

const Experience = () => {
  const refs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  refs.current.forEach(ref => {
    if (ref instanceof Element) {
      observer.observe(ref);
    }
  });

  return () => {
    refs.current.forEach(ref => {
      if (ref instanceof Element) {
        observer.unobserve(ref);
      }
    });
  };
}, []);

  return (
    <section className="experience-page">
      <div className="experience-header">
        <h1>Work Experience</h1>
        <p>Crafted with code. Driven by curiosity.</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className="timeline-item"
            key={index}
            ref={el => (refs.current[index] = el)}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h2>{exp.company}</h2>
              <h3>{exp.title}</h3>
              <span className="timeline-date">{exp.date}</span>
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
