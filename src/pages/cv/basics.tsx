import * as classnames from 'classnames';
import * as React from 'react';

const enum Profiles {
  LinkedIn = 'LinkedIn', Github = 'Github',
  Gitlab = 'Gitlab', LastFM = 'LastFM',
  StackOverflow = 'StackOverflow'
}
type Profile = Profiles.LinkedIn | Profiles.Github |
  Profiles.Gitlab | Profiles.LastFM | Profiles.StackOverflow;

const CVBasics: React.SFC<{ basics: any }> = (props: any) => {
  const basics = props.basics;
  return (
    <div className='container-fluid'>
      <section className='col'>
        <header>
          <div className='card border-dark mb-3'>
            {basics.image && (
              <img className='card-img-top' src={basics.image} alt={basics.name} />
            )}
            <div className='card-body'>
              <div className='card-title'>{basics.label}</div>
              <div className='card-subtitle'>
                <a className='card-link' href={`mailto:${basics.email}`}>{basics.name}</a>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className='col'>
        {basics.summary && (
          <div className='card border-dark mb-3 text-justify'>
            <div className='card-body'>
              <p className='card-text'>
                {basics.summary}
              </p>
            </div>
          </div>
        )}
      </section>
      <section className='col'>
        {basics.profiles && (
          <div className='card-group'>
            {
              basics.profiles.map((profile: any, key: number) => {
                const network: Profile = profile.network as Profile;
                return (
                  <div key={key} className='card text-center border-dark mb-3'>
                    <div className='card-body'>
                      <a href={profile.url} aria-label={network} >
                        <i className={classnames('fa fa-lg fa-fw fa-4x', {
                          'fa-linkedin': network === Profiles.LinkedIn,
                          'fa-github': network === Profiles.Github,
                          'fa-gitlab': network === Profiles.Gitlab,
                          'fa-lastfm': network === Profiles.LastFM,
                          'fa-stack-overflow': network === Profiles.StackOverflow
                        })} aria-hidden={true}></i>
                        <span className='sr-only sr-only-focusable'>{network}</span>
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </div>
        )}
      </section>
    </div>
  );

};

export default CVBasics;
