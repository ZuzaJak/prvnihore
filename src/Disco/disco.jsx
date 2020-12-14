import React from 'react';
import './disco.css';
import mechanismus from '../img/mechanismus.jpg';
import imaginarium from '../img/imaginarium.jpg';
import silencio from '../img/clubsilencio.jpg';

const Disco = () => {
  return (
    <>
      <h1>
        <i class="fas fa-compact-disc"></i> diskografie
      </h1>
      <div id="disco" className="disco">
        <div className="disco-item">
          <h2 className="disco-item-head">
            Křehký mechanismus pozemského štěstí
          </h2>
          <h3 className="disco-item-subhead">(2017, Kontra Production)</h3>
          <div className="disco-item-flex">
            <figure className="disco-item-img">
              <a
                href="https://prvnihore1.bandcamp.com/album/k-ehk-mechanismus-pozemsk-ho-t-st"
                target="_blank"
              >
                <img
                  className="disco-album-img"
                  src={mechanismus}
                  alt="fotka obalu"
                />
              </a>
              <figcaption>
                Deska Křehký mechanismus pozemského štěstí byla natočena v
                březnu až červnu ve{' '}
                <a href="https://studiohostivar.cz/" target="_blank">
                  studiích Hostivař
                </a>{' '}
                (u Zdeňka Šikýře) a{' '}
                <a href="https://www.audio-factory.cz/" target="_blank">
                  {' '}
                  Audio Factory
                </a>
                . Mix a mastering{' '}
                <a href="http://www.al-esh.cz/" target="_blank">
                  {' '}
                  Aleš Hyvnar
                </a>
                .
              </figcaption>
            </figure>
            <div className="disco-item-text">
              <p className="disco-item-highlight">
                Vašnosti, album "Křehký mechanismus pozemského štěstí" je
                dvojitou DESKOU ROKU v publicistických cenách Břitva! Račte toto
                libé album poslouchat a stahovat na Bandcampu nebo si CD můžete
                objednat coby úchvatný artefakt (na vyžádání i s podpisy) přes{' '}
                {''}
                <a href="#kontakt">mail</a>.
              </p>
              <p>Tracklist:</p>
              <ol>
                <li>Viva la Vita! 3:57</li>
                <li>Půlměsíc 4:07</li>
                <li>Hymna naděje 2:53</li>
                <li>Dítě boží 4:27</li>
                <li>Malej pán 3:35</li>
                <li>Čobol a Čehún 4:18</li>
                <li>Křehký mechanismus pozemského štěstí 4:36</li>
                <li>Mrtvý obrazy 3:46</li>
                <li>Dekadentní bál 3:09</li>
                <li>Sisyfova zpověď 4:55</li>
                <li>Černej Petr 5:04</li>
              </ol>
              <div className="disco-item-credits">
                <p>
                  <span className="disco-item-span1"> Vydavatelství: </span>
                  <span>
                    <a href="http://kontraproduction.cz/cz/" target="_blank">
                      Kontra Production
                    </a>
                  </span>
                </p>
                <p>
                  <span className="disco-item-span1">Producent:</span> Karl
                  Pumperlich
                </p>
                <p>
                  <span className="disco-item-span1">Mix a mastering:</span>{' '}
                  <a href="http://www.al-esh.cz/" target="_blank">
                    {' '}
                    Aleš Hyvnar
                  </a>
                </p>
                <p>
                  <span className="disco-item-span1">Album art:</span> Medák a
                  Petra Komárková
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="disco-item">
          <h2 className="disco-item-head">Imaginarium</h2>
          <h3 className="disco-item-subhead">(2013, Kontra Production)</h3>
          <div className="disco-item-flex">
            <figure className="disco-item-img">
              <a
                href="https://prvnihore1.bandcamp.com/album/imaginarium"
                target="_blank"
              >
                {' '}
                <img
                  className="disco-album-img"
                  src={imaginarium}
                  alt="fotka obalu"
                />
              </a>
              <figcaption>
                Album bylo natočeno v lednu až říjnu 2013 ve studiích Entlaab a
                ŠOPA. O mix a mastering se postaral Standa Valášek ze{' '}
                <a href="http://www.studiosopa.cz/" target="_blank">
                  {' '}
                  studia ŠOPA
                </a>
                . Imaginarium za 250,- Kč objednávejte u KONTRA production!
                Celou desku je možné taktéž stáhnout v plné kvalitě (wav
                soubory) na stránkách{' '}
                <a href="https://prvnihore1.bandcamp.com/album/imaginarium">
                  Bandcamp
                </a>{' '}
                za pouhých 140 korun českých.
              </figcaption>
            </figure>
            <div className="disco-item-text">
              <p>Tracklist:</p>
              <ol>
                <li>Kapelo, vyprávěj!</li>
                <li>Carnívale</li>
                <li>Don Quijote</li>
                <li>Něžný metalista</li>
                <li>Absurdistán</li>
                <li>Líbezná hudba</li>
                <li>Galimatyáš</li>
                <li>Vítejte v Imaginariu!</li>
                <li>Melancholía</li>
                <li>Ovíněná</li>
                <li>Němohra</li>
                <li>Ikare!</li>
                <li>Ze srdce se ozval kvil</li>
                <li>Bolero</li>
                <li>Vyložené strašení!</li>
              </ol>
              <div className="disco-item-credits">
                <p>
                  <span className="disco-item-span1">Produkce:</span> První Hoře
                </p>
                <p>
                  <span className="disco-item-span1">Mix a mastering:</span>{' '}
                  <a href="http://www.studiosopa.cz/" target="_blank">
                    {' '}
                    Standa Valášek
                  </a>
                </p>
                <p>
                  <span className="disco-item-span1">Album art:</span> Petra
                  Komárková
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="disco-item">
          <h2 className="disco-item-head">Club Silencio</h2>
          <h3 className="disco-item-subhead">(2011, Kontra Production)</h3>
          <div className="disco-item-flex">
            <figure className="disco-item-img">
              <a
                href="https://prvnihore1.bandcamp.com/album/club-silencio"
                target="_blank"
              >
                <img
                  className="disco-album-img"
                  src={silencio}
                  alt="fotka obalu"
                />
              </a>
              <figcaption>
                Album bylo natočeno v lednu až říjnu 2013 ve studiích Entlaab a
                ŠOPA. O mix a mastering se postaral Standa Valášek ze{' '}
                <a href="http://www.studiosopa.cz/" target="_blank">
                  {' '}
                  studia ŠOPA
                </a>
                . Imaginarium za 250,- Kč objednávejte u KONTRA production!
                Celou desku je možné taktéž stáhnout v plné kvalitě (wav
                soubory) na stránkách{' '}
                <a href="https://prvnihore1.bandcamp.com/album/imaginarium">
                  Bandcamp
                </a>{' '}
                za pouhých 140 korun českých.
              </figcaption>
            </figure>
            <div className="disco-item-text">
              <p>Tracklist:</p>
              <ol>
                <li>Kapelo, vyprávěj!</li>
                <li>Carnívale</li>
                <li>Don Quijote</li>
                <li>Něžný metalista</li>
                <li>Absurdistán</li>
                <li>Líbezná hudba</li>
                <li>Galimatyáš</li>
                <li>Vítejte v Imaginariu!</li>
                <li>Melancholía</li>
                <li>Ovíněná</li>
                <li>Němohra</li>
                <li>Ikare!</li>
                <li>Ze srdce se ozval kvil</li>
                <li>Bolero</li>
                <li>Vyložené strašení!</li>
              </ol>
              <div className="disco-item-credits">
                <p>
                  <span className="disco-item-span1">Produkce:</span> První Hoře
                </p>
                <p>
                  <span className="disco-item-span1">Mix a mastering:</span>{' '}
                  <a href="http://www.studiosopa.cz/" target="_blank">
                    {' '}
                    Standa Valášek
                  </a>
                </p>
                <p>
                  <span className="disco-item-span1">Album art:</span> Petra
                  Komárková
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disco;
