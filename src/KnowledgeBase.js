import React from 'react';
import './IdeaSection.css';
import Epic from './epic.jpeg'
import lyric from './lyric.jpeg'
import dramatic from './dramatic.jpeg'
import { Carousel } from 'antd';

function IdeaSection() {
  return (
    <div className="idea" style={{height:'1200px'}}>
      <div className="heading"><h1>Get Ideas here..</h1></div>
      <div class="element">
            <div class="a">
                <a href="https://artincontext.org/epic-poetry/"><img src={Epic}/></a>
            </div>
            <div class="b">
                <a href="https://www.familyfriendpoems.com/collection/narrative-poems/"><img src='https://media-private.canva.com/BrN_Y/MAGW6ABrN_Y/1/p.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20241124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T032355Z&X-Amz-Expires=26494&X-Amz-Signature=2e6f3fb55d24ff31422ba89afa3388f35b2186344d385e0547e8f4d5abd212d3&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sun%2C%2024%20Nov%202024%2010%3A45%3A29%20GMT'/></a>
            </div>
            <div class="c">
                <a href="https://poemanalysis.com/genre/lyric-poems/"><img src={lyric}/></a>
            </div>
            <div class="d">
                <a href="https://www.storyboardthat.com/genres/dramatic-poetry"><img src={dramatic}/></a>
            </div>
        </div>
        <div className='slide-slide'>
          <div>
          <Carousel autoplay style={{position:'absolute',left:'5%'}} className='slider-image' >
            <p>“Clouds come floating into my life,
                    no longer to carry rain or usher storm,
                      but to add color to my sunset sky.”
                                        ― Rabindranath Tagore, Stray Birds</p>
          <p>"Wisely and slow. They stumble that run fast."
                                    - William Shakespear"</p>
          </Carousel>
          </div>
            <div>
        <Carousel autoplay  style={{position:'absolute',left:'50%'}} className='slider-image'>

            <img src='https://cdn.pixabay.com/photo/2024/05/20/15/29/ai-generated-8775533_640.png' alt=''/>
            <img src='https://cdn.pixabay.com/photo/2024/04/06/15/37/man-8679497_640.png' alt=''  />
          </Carousel>
          </div>
        </div>
    </div>
  );
}

export default IdeaSection;
