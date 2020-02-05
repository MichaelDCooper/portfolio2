import React from "react";

const Uses = () => {
  return (
    <div>
      <h2 className="ui left aligned header">Uses</h2>
      <div>
        <h3 className="ui left aligned header">About:</h3>
        <p>
          I decided to make this section since I've found several Uses pages
          helpful over the years. My basic mentality here is that I want to be
          thorough for my reference in the future and to help anyone looking for
          recommendations, or wondering how I do something. I consider most of
          the equipment listed here a recomendation and as a general rule of
          thumb, I don't recommend anything I haven't used for a few months.
          With that being said it's quite possible that my local environment is
          slightly different from this page as I like to change my setup
          semi-frequently. As soon as a product I've been using proves itself
          worthy, I'll update this page accordingly. PS: If you're using
          something cool that you think I'd like, shoot me an email!
        </p>
        <h3 className="ui left aligned header">Computers</h3>

        <ul>
          <li>
            <p>2014 15" MacBook Pro Retina (Probably Time For An Upgrade)</p>
            <ul>
              <li>
                <p>2.8 GHz Quad-Core Intel Core i7 Processor</p>
              </li>
              <li>
                <p>16 GB 1600 MHz DDR3 RAM</p>
              </li>
            </ul>
            <p>
              This is my daily driver for all coding projects. I prefer working
              on a laptop, it allows me to change locations frequently and bring
              my work with me while traveling.
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <p>2017 iMac (Bad. Do not recommend)</p>
            <p>
              Mostly used for ProTools and music production. In retrospect, I
              would have built a PC, 2 years after purchasing thus maxed out
              Apple computer I find it struggles to keep up with modern audio
              plugins. It's also worth noting that the design of the screen
              makes it fairly difficult to pair this machine with a secondary
              monitor. Don't get me wrong, the display is beautiful, but in
              order to turn this into a hybrid code/music production
              workstation, I really do need another monitor.
            </p>
          </li>
        </ul>

        <h3 className="ui left aligned header">Text Editor/IDE</h3>
        <ul>
          <li>
            <p>Note: Using Material UI Theme wherever available.</p>
          </li>
          <li>
            <p>
              React/Web: VS Code with the Material UI Theme and a handful of
              plugins (link to a gist).
            </p>
          </li>
          <li>
            <p>
              Python: PyCharm Professional with Anaconda Plugin and Material UI
              Theme
            </p>
          </li>
          <li>
            <p>
              C++: XCode/Clion with default Apple dark mode, Material UI Theme
            </p>
          </li>
          <li>
            <p>
              Everything Else: Vim. Definitely still working on my Vim skills
              and making an active effort to force myself into getting better.
            </p>
          </li>
        </ul>

        <h3 className="ui left aligned header">Misc. Software: </h3>
        <ul>
          <li>
            <p>Brave Browser</p>
          </li>
          <li>
            <p>Last Pass</p>
          </li>
          <li>
            <p>Alfred</p>
          </li>
          <li>
            <p>Dozer</p>
          </li>
          <li>
            <p>Keyboard Maestro</p>
          </li>
          <li>
            <p>Dato</p>
          </li>
          <li>
            <p>Numi</p>
          </li>
          <li>
            <p>Obs</p>
          </li>
          <li>
            <p>VMWare Fusion</p>
          </li>
          <li>
            <p>Wireguard</p>
          </li>
          <li>
            <p>Algo VPN</p>
          </li>
          <li>
            <p>Grammarly</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Uses;
