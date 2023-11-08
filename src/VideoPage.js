import Headers from './Headers';
function VideoPage() {
    return (
        
            <div class="Parent">
                <div id="header">
                    <div id="logo"><img src="https://imgur.com/LJp0ZQt" height="30px" width="40px" /></div>
                    <div id="sublogo"></div>
                    <div id="search"></div>
                    <div id="surf"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP08adS4oQ-ztaxq3axNf_rLytRcmOzxXnw&usqp=CAU" height="35px" width="35px" className="surf img" /></div>
                    <div id="signin"></div>
                </div>
                <div id="mainbody">
                        <div id="Playvideo">
                        <div id="play"><iframe width="1100" height="500" src="https://www.youtube.com/embed/iRFJAKY2mLw?si=8nNniiBdevP904cB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                        </div>
                        <div id="sidebar">
                           
                                <div className='c1'>
                                    <div className='r1'>
                                        <div className='a1'><img src="https://img.youtube.com/vi/QaEpYc3YLz4/maxresdefault.jpg" width="210" height="158" /></div>
                                        <div className='a2'>
                                            <div className="b1">KOENIGSEGG Regera | 0-400-0 km/h - NEW WORLD RECORD</div>
                                            <div className="b2">
                                            <div className='subb2'>KOENIGSEGG</div>
                                            <div className='subb3'><img src="https://cdn-icons-png.flaticon.com/128/1442/1442912.png" width="10px" height="15px"/></div>
                                            </div>
                                            <div className="b3">2M views 6 months ago</div>
                                        </div>
                                    </div>
                               <div className="r2">
                                <div className='a1'><img src="" /></div>
                               </div>
                               <div className="r3"></div>
                               <div className="r4"></div>
                               <div className="r5"></div>
                                </div>
                            </div>
                        
               </div>
               </div>
               
               
               
    );
}


export default VideoPage