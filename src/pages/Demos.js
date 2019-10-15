import React from 'react';
import { HashLink } from 'react-router-hash-link';
import LazyLoad from 'react-lazyload';
import Slick from 'react-slick';
import Demo from '../components/Demo';
import InnerImageZoom from 'react-inner-image-zoom';
import './demos.css';
import './slick.css';
import './slick-theme.css';
import './iiz.css';

const Demos = () => {
  return(
    <div className="demos">
      <h2 className="demos__heading">Demos</h2>

      <nav className="demos__nav">
        <span>jump to:</span>
        <HashLink to="/demos#basic">Basic</HashLink>
        <HashLink to="/demos#fullscreen">Fullscreen On Mobile</HashLink>
        <HashLink to="/demos#responsive">Responsive Images</HashLink>
        <HashLink to="/demos#lazyload">With React Lazyload</HashLink>
        <HashLink to="/demos#slick">With Slick Carousel</HashLink>
      </nav>

      <section id="basic">
        <Demo name="Basic" notes={['Simplest use case with only src prop set', 'Photo credit: <a href="https://unsplash.com/photos/Kx8DDqb6Wbw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Toa Heftiba</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom src="/path/to/image.jpg" />`}>
          <InnerImageZoom src="images/unsplash-2.jpg" />
        </Demo>
      </section>

      <section id="fullscreen">
        <Demo name="Fullscreen On Mobile" notes={['Zoomed image is fullscreen on touch devices below a specified breakpoint', 'Photo credit: <a href="https://unsplash.com/photos/1DMNn6gBbwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Gabrielle Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0fullscreenOnMobile={true}\n/>`}>
          <InnerImageZoom src="images/unsplash-3.jpg" zoomSrc="images/unsplash-3-large.jpg" fullscreenOnMobile={true} />
        </Demo>
      </section>

      <section id="responsive">
        <Demo name="Responsive Images" notes={['Accepts default srcset and sources (with srcset, media, type)', 'Use with <a href="https://github.com/scottjehl/picturefill" target="_blank" rel="noopener noreferrer">Picturefill</a> for older browser support', 'Photo credit: <a href="https://unsplash.com/photos/eQ2PUDrwSx0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Brittany Neale</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/default-image.jpg"\n\xa0\xa0srcSet="/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x"\n\xa0\xa0sources={[{\n\xa0\xa0\xa0\xa0srcSet='/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x',\n\xa0\xa0\xa0\xa0media: '(min-width: 768px)'\n\xa0\xa0}]}\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n/>`}>
          <InnerImageZoom
            src="images/unsplash-4.jpg"
            srcSet="images/unsplash-4-305.jpg, images/unsplash-4-610.jpg 2x"
            sources={[{
              srcSet: 'images/unsplash-4-740.jpg, images/unsplash-4-1480.jpg 2x',
              media: '(min-width: 375px)'
            }]}
            zoomSrc="images/unsplash-4-large.jpg"
          />
        </Demo>
      </section>

      <section id="lazyload">
        <Demo name="With React Lazyload" notes={['Integration with <a href="https://github.com/twobin/react-lazyload" target="_blank">React Laxyload</a>', 'Photo credit: <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jay Wennington</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<LazyLoad>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0/>\n</LazyLoad>`}>
          <LazyLoad>
            <InnerImageZoom src="images/unsplash-8.jpg" zoomSrc="images/unsplash-8-large.jpg" />
          </LazyLoad>
        </Demo>
      </section>

      <section id="slick">
        <Demo name="With Slick Carousel" notes={['Integration with <a href="https://github.com/akiran/react-slick" target="_blank">React Slick</a>', 'Recommend using with fullscreenOnMobile', 'Photo credits: <a href="https://unsplash.com/photos/zbPDL84kvRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Martin Adams</a>, <a href="https://unsplash.com/photos/Nv4QHkTVEaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Nordwood Themes</a>, and <a href="https://unsplash.com/photos/ZLRRiyrmALA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jordan Madrid</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<Slick dots={true}>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-1.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-1-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-2.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-2-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-3.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-3-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n</Slick>`}>
          <Slick dots={true}>
            <InnerImageZoom src="images/unsplash-5.jpg" zoomSrc="images/unsplash-5-large.jpg" fullscreenOnMobile={true} />
            <InnerImageZoom src="images/unsplash-6.jpg" zoomSrc="images/unsplash-6-large.jpg" fullscreenOnMobile={true} />
            <InnerImageZoom src="images/unsplash-7.jpg" zoomSrc="images/unsplash-7-large.jpg" fullscreenOnMobile={true} />
          </Slick>
        </Demo>
      </section>
    </div>
  );
};

export default Demos;