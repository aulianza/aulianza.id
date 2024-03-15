import styled from '@emotion/styled';
import { useTheme } from 'next-themes';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <StyledToggle className='flex'>
      <input
        checked={resolvedTheme === 'dark'}
        type='checkbox'
        className='mode-toggle'
        onChange={toggleTheme}
        id='switch-theme'
        data-umami-event={`Switch to ${
          resolvedTheme === 'light' ? 'Dark' : 'Light'
        } Mode`}
      />
      <label className='mode-toggle-label' htmlFor='switch-theme'>
        <svg
          width='45'
          height='25'
          viewBox='0 0 300 170'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='bg-night'>
              <stop className='bg-stop-start' offset='0%' />
              <stop className='bg-stop-end' offset='100%' />
            </linearGradient>
            <filter id='glow'>
              <feDropShadow
                dx='0'
                dy='0'
                stdDeviation='8'
                floodColor='#ffffff'
                floodOpacity='0.75'
              />
            </filter>
            <filter id='glow-mini'>
              <feDropShadow
                dx='0'
                dy='0'
                stdDeviation='0.5'
                floodColor='#ffffff'
                floodOpacity='0.5'
              />
            </filter>
          </defs>
          <rect
            className='bg'
            width='300'
            height='170'
            rx='90'
            ry='90'
            fill='url(#bg-night)'
          />
          <circle
            className='source'
            cx='0'
            cy='0'
            r='70'
            fill='#ffffff'
            style={{ filter: 'url(#glow)' }}
          />
          <g className='stars'>
            <circle
              className='star-1'
              cx='190'
              cy='50'
              r='4'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
            />
            <circle
              className='star-2'
              cx='250'
              cy='70'
              r='4'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
            />
            <circle
              className='star-3'
              cx='220'
              cy='130'
              r='6'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
            />
          </g>
        </svg>
      </label>
    </StyledToggle>
  );
};

export default ThemeToggleButton;

const StyledToggle = styled.div`
  .mode-toggle {
    width: 0;
    height: 0;
    margin: 0;
    display: none;
  }

  .mode-toggle + label {
    display: inline-block;
    cursor: pointer;
    border-radius: 25px;
    position: relative;
  }

  .mode-toggle + label::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 1000px;
    transition: box-shadow 150ms ease-in-out;
  }

  .mode-toggle + label svg {
    vertical-align: middle;
  }

  .mode-toggle + label .source {
    transition:
      fill,
      transform 250ms ease-in-out;
  }

  .mode-toggle + label .bg-stop-start,
  .mode-toggle + label .bg-stop-end {
    transition: stop-color 150ms ease-in-out;
  }

  .mode-toggle + label .stars {
    transition: 50ms ease-in-out;
  }

  .mode-toggle + label::after {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.25);
  }

  .mode-toggle + label .source {
    fill: #f7f7e7;
    transform: translate(70%, 50%);
  }

  .mode-toggle + label .bg-stop-start {
    stop-color: #93d4cc;
  }

  .mode-toggle + label .bg-stop-end {
    stop-color: #c7dfc3;
  }

  .mode-toggle + label .stars {
    transform: translateX(100%);
  }

  .mode-toggle:checked + label::after {
    box-shadow: none;
  }

  .mode-toggle:checked + label .source {
    fill: #ffffff;
    transform: translate(30%, 50%);
  }

  .mode-toggle:checked + label .bg-stop-start {
    stop-color: #173754;
  }

  .mode-toggle:checked + label .bg-stop-end {
    stop-color: #388296;
  }

  .mode-toggle:checked + label .stars {
    transform: translateX(0);
  }

  .mode-toggle:checked + label .star-1,
  .mode-toggle:checked + label .star-2,
  .mode-toggle:checked + label .star-3 {
    animation-name: star;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .mode-toggle:checked + label .star-1 {
    animation-delay: 0s;
  }

  .mode-toggle:checked + label .star-2 {
    animation-delay: 0.5s;
  }

  .mode-toggle:checked + label .star-3 {
    animation-delay: 1s;
  }

  @keyframes star {
    50% {
      opacity: 0.25;
    }
  }
`;
