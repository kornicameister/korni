import * as React from 'react';

interface Language {
  language: string;
  fluency: string;
}

const CVLanguages: React.SFC<{ languages: Language[] }> = (props) => {
  const { languages } = props;
  return (
    <div className='container'>
      <div className='card-group'>
        {
          languages.map((lang: Language) => {
            return (
              <div key={lang.language} className='card mb-0 dark-border text-dark text-center'>
                <div className='card-header'>
                  <h3>{lang.language}</h3>
                </div>
                <div className='card-body'>
                  <p className='card-text'>{lang.fluency}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CVLanguages;
