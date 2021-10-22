import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsArrowRight, BsEye } from 'react-icons/bs';
import { FaPlay, FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authorImg from '../../assets/img/blog/author_img.jpg';
import videoImg from '../../assets/img/blog/p3.jpg';
import Modal from '../Modal';
import postData from './postData';
import SinglePost from './SinglePost';

function BlogPosts() {
    return (
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="blog-posts">
                            {postData.map((data) => (
                                <SinglePost
                                    key={data.id}
                                    category={data.category}
                                    featurdImg={data.featuredImg}
                                    heading={data.heading}
                                    views={data.views}
                                    comments={data.comments}
                                    meta={data.meta}
                                    post={data.post}
                                    author={data.author}
                                    authorImg={data.authorImg}
                                    postLink={data.postLink}
                                />
                            ))}
                        </div>
                        {/* Video Post */}
                        <div className="single-blog-post format-video video-post">
                            <div
                                className="post-featured-thumb bg-cover"
                                style={{
                                    backgroundImage: `url(${videoImg})`,
                                }}
                            >
                                <div className="video-play-btn">
                                    <span className="play-video popup-video">
                                        <Modal
                                            modalBtn={<FaPlay style={{ color: 'white' }} />}
                                            channel="youtube"
                                            videoId="L61p2uyiMSo"
                                            className="play-video"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <a href="news.html">Charity</a>
                                </div>
                                <h2>
                                    <a href="news-details.html">
                                        Condolences to Families Effected By Flash Floods
                                    </a>
                                </h2>
                                <div className="post-meta">
                                    <span>
                                        <BsEye
                                            style={{
                                                marginRight: '5px',
                                                fontSize: '18px',
                                                marginTop: '-2px',
                                            }}
                                        />
                                        232 Views
                                    </span>
                                    <span>
                                        <FaRegComments
                                            style={{
                                                marginRight: '5px',
                                                fontSize: '18px',
                                                marginTop: '-2px',
                                            }}
                                        />
                                        35 Comments
                                    </span>
                                    <span>
                                        <BiCalendar
                                            style={{
                                                marginRight: '5px',
                                                fontSize: '18px',
                                                marginTop: '-2px',
                                            }}
                                        />
                                        12th May 2020
                                    </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in repreh enderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-30">
                                    <div className="author-info">
                                        <div
                                            className="author-img"
                                            style={{
                                                backgroundImage: `url(${authorImg})`,
                                            }}
                                        />
                                        <h5>
                                            <Link to="/news-details">by Hetmayar</Link>
                                        </h5>
                                    </div>
                                    <div className="post-link">
                                        <Link to="/news-details">
                                            <BsArrowRight style={{ fontSize: '25px' }} /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPosts;
