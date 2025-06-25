import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const Achievements = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(ref => {
      if (ref instanceof Element) {
        observer.observe(ref);
      }
    });

    return () => {
      cardsRef.current.forEach(ref => {
        if (ref instanceof Element) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="achievements-page">
      <div className="floating-bg"></div>
      <div className="achievements-container">
        <h1 className="section-title">Achievements & Projects</h1>

        <div className="card-grid">
          {[
            {
              title: 'Web Development Award',
              desc: '2nd Prize in Web Development Competition for Foodie App (organized by ACM).'
            },
            {
              title: 'DSA Problem Solving',
              desc: 'Solved 500+ problems on LeetCode and GfG, LeetCode Rating: 1320.'
            },
            {
              title: 'Competitive Programming',
              desc: 'CodeChef Division 4 participant with a 1150 rating.'
            },
            {
              title: 'Top Academic Rank',
              desc: 'Ranked 1st in IT Department (3rd Year); 2nd in 2nd Year at PVGCOET.'
            },
            {
              title: 'Foodie App Project',
              desc: `Unified food delivery and donation app. Kotlin, Node.js, Firebase. Secured 2nd prize.`
            }
          ].map((card, i) => (
            <div
              key={i}
              className="achievement-card"
              ref={el => (cardsRef.current[i] = el)}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
