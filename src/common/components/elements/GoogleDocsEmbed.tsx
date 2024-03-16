interface GoogleDocsEmbedProps {
  src: string;
  width?: string;
  height?: string;
}

const GoogleDocsEmbed: React.FC<GoogleDocsEmbedProps> = ({
  src,
  width = '100%',
  height = '800px',
}) => {
  return (
    <iframe
      src={`https://docs.google.com/document/d/${getDocIdFromUrl(src)}/preview`}
      title='Google Docs Viewer'
      width={width}
      height={height}
      frameBorder='0'
      scrolling='no'
    >
      This browser does not support embedding Google Docs. Please use a
      compatible browser.
    </iframe>
  );
};

const getDocIdFromUrl = (url: string): string => {
  const match = url.match(/\/d\/(.*?)\/(edit|preview)/);
  return match ? match[1] : '';
};

export default GoogleDocsEmbed;
