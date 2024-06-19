import {Container, Row, Col} from '@acrool/react-grid';
import styled from 'styled-components';
import React from 'react';


const Blog = () => {
    return (
        <BlogRoot>
            <Container>
                {/* 首頁 */}
                <BlogHeader className="py-2">
                    <Row>
                        <Col col={4} className="d-flex align-items-center">
                            <Link href="#">Subscribe</Link>
                        </Col>
                        <Col col={4} className="d-flex align-items-center justify-content-center">
                            <Logo href="#">Large</Logo>
                        </Col>
                        <Col col={4} className="d-flex align-items-center justify-content-end">
                            <Link href="#"><i className="fa-solid fa-magnifying-glass mr-3"></i></Link>
                            <SignBtn>Sign up</SignBtn>
                        </Col>
                    </Row>
                </BlogHeader>

                {/*  導覽列  */}
                <NavOverflow className="py-1 mb-2">
                    <Link className="p-2" href="#">World</Link>
                    <Link className="p-2" href="#">U.S.</Link>
                    <Link className="p-2" href="#">Technology</Link>
                    <Link className="p-2" href="#">Design</Link>
                    <Link className="p-2" href="#">Culture</Link>
                    <Link className="p-2" href="#">Business</Link>
                    <Link className="p-2" href="#">Politics</Link>
                    <Link className="p-2" href="#">Opinion</Link>
                    <Link className="p-2" href="#">Science</Link>
                    <Link className="p-2" href="#">Health</Link>
                    <Link className="p-2" href="#">Style</Link>
                    <Link className="p-2" href="#">Travel</Link>
                </NavOverflow>
            </Container>

            <Container>
                {/*  黑色區塊  */}
                <DarkBlock className="p-4 p-md-5">
                    <Col md={6}>
                        <DarkH1>Title of a longer featured blog post</DarkH1>
                        <DarkP>Multiple lines of text that form the lede, informing new readers quickly and
                            efficiently about what’s most interesting in this post’s contents.</DarkP>
                        <DarkA href="#">Continue reading...</DarkA>
                    </Col>
                </DarkBlock>

                {/*  兩格圖文區塊  */}
                <Row className="my-4 gx-4">
                    <Col col={12} md={6}>
                        <Card className="mb-3">
                            <div className="d-flex flex-column p-4">
                                <PictureBlockP>World</PictureBlockP>
                                <PictureBlockH3>Featured post</PictureBlockH3>
                                <DateP>Nov 12</DateP>
                                <p className="mb-xl-3 flex-grow-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <PictureBlockA href="#">Continue reading</PictureBlockA>
                            </div>
                            <Picture className="d-none d-lg-flex">Thumbnail</Picture>
                        </Card>
                    </Col>
                    <Col col={12} md={6}>
                        <Card className="mb-3">
                            <div className="d-flex flex-column p-4">
                                <PictureBlockP isActive>Design</PictureBlockP>
                                <PictureBlockH3>Post title</PictureBlockH3>
                                <DateP>Nov 11</DateP>
                                <p className="mb-xl-3 flex-grow-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <PictureBlockA href="#">Continue reading</PictureBlockA>
                            </div>
                            <Picture className="d-none d-lg-flex">Thumbnail</Picture>
                        </Card>
                    </Col>
                </Row>

                <Row className="g-5">
                    {/*  文章左邊區塊  */}
                    <Col col={12} md={8}>
                        <TitleH3 className="pb-4 mb-4">From the Firehose</TitleH3>
                        <article className="mb-5">
                            <h1>Sample blog post</h1>
                            <ArticleDateP>{'January 1, 2021 by '}
                                <ArticleNameA href="#">Mark</ArticleNameA>
                            </ArticleDateP>
                            <p>This blog post shows a few different types of content that’s supported and styled
                                with Bootstrap. Basic typography, lists, tables, images, code, and more are all
                                supported as expected.</p>
                            <hr/>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects
                                the surrounding content. We'll repeat it often to keep the demonstration flowing, so
                                be on the lookout for this exact same string of text.</p>
                            <h2 className="mb-2">Blockquotes</h2>
                            <p className="mb-3">This is an example blockquote in action:</p>
                            <Blockquote>Quoted text goes here.</Blockquote>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects
                                the surrounding content. We'll repeat it often to keep the demonstration flowing, so
                                be on the lookout for this exact same string of text.</p>
                            <h3 className="mb-2">Example lists</h3>
                            <p className="mb-3">This is some additional paragraph placeholder content. It's a
                                slightly shorter version of the other highly repetitive body text used throughout.
                                This is an example unordered list:</p>
                            <ArticleUl>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ArticleUl>
                            <p className="mb-3">And this is an ordered list:</p>
                            <ArticleOl>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ArticleOl>
                            <p className="mb-3">And this is a definiton list:</p>
                            <dl className="mb-3">
                                <dt>HyperText Markup Language (HTML)</dt>
                                <dd>The language used to describe and define the content of a Web page</dd>
                                <dt>Cascading Style Sheets (CSS)</dt>
                                <dd>Used to describe the appearance of Web content</dd>
                                <dt>JavaScript (JS)</dt>
                                <dd>The programming language used to build advanced Web sites and applications</dd>
                            </dl>
                            <h2 className="mb-2">Inline HTML elements</h2>
                            <p className="mb-3">HTML defines a long list of available inline tags, a complete list
                                of which can be found on the
                                <ArticleNameA href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla
                                    Developer Network</ArticleNameA>
                                .
                            </p>
                            <ArticleUl>
                                <li><strong>To bold text</strong>, use <code>&lt;strong&gt;</code>.</li>
                                <li><em>To italicize text</em>, use <code>&lt;em&gt;</code>.</li>
                                <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should
                                    use <code>&lt;abbr&gt;</code>, with an optional <code>title</code> attribute for
                                    the full phrase.
                                </li>
                                <li>Citations, like<cite> — Mark Otto</cite>, should use <code>&lt;cite&gt;</code>.
                                </li>
                                <li>
                                    <del>Deleted</del>
                                    text should use <code>&lt;del&gt;</code> and <ins>inserted</ins> text should
                                    use <code>&lt;ins&gt;</code>.
                                </li>
                                <li>Superscript <sup>text</sup> uses <code>&lt;sup&gt;</code>and
                                    subscript <sub>text</sub> uses <code>&lt;sub&gt;</code>.
                                </li>
                            </ArticleUl>
                            <p className="mb-3">Most of these elements are styled by browsers with few modifications
                                on our part.</p>
                            <h2 className="mb-2">Heading</h2>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects
                                the surrounding content. We'll repeat it often to keep the demonstration flowing, so
                                be on the lookout for this exact same string of text.</p>
                            <h3 className="mb-2">Sub-heading</h3>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects
                                the surrounding content. We'll repeat it often to keep the demonstration flowing, so
                                be on the lookout for this exact same string of text.</p>
                            <pre><code>Example code block</code></pre>
                            <p className="mb-3">This is some additional paragraph placeholder content. It's a
                                slightly shorter version of the other highly repetitive body text used
                                throughout.</p>
                        </article>

                        <article className="mb-5">
                            <h1>Another blog post</h1>
                            <ArticleDateP>{'December 23, 2020 by '}
                                <ArticleNameA href="#">Jacob</ArticleNameA>
                            </ArticleDateP>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects the
                                surrounding content. We'll repeat it often to keep the demonstration flowing, so be on
                                the lookout for this exact same string of text.</p>
                            <Blockquote isActive>Longer quote goes here, maybe with some
                                <strong> emphasized text </strong>
                                in the middle of it.
                            </Blockquote>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill the available space and show how a longer snippet of text affects the
                                surrounding content. We'll repeat it often to keep the demonstration flowing, so be on
                                the lookout for this exact same string of text.</p>
                            <h3 className="mb-2">Example table</h3>
                            <p className="mb-3">And don't forget about tables in these posts:</p>
                            <Table className="mb-3">
                                <thead>
                                    <TableTr isActive>
                                        <th className="p-2" style={{width: '30%'}}>Name</th>
                                        <th className="p-2" style={{width: '30%'}}>Upvotes</th>
                                        <th className="p-2" style={{width: '40%'}}>Downvotes</th>
                                    </TableTr>
                                </thead>
                                <tbody>
                                <TableTr>
                                    <td className="p-2">Alice</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">11</td>
                                </TableTr>
                                <TableTr>
                                    <td className="p-2">Bob</td>
                                    <td className="p-2">4</td>
                                    <td className="p-2">3</td>
                                </TableTr>
                                <TableTr isActive>
                                    <td className="p-2">Charlie</td>
                                    <td className="p-2">7</td>
                                    <td className="p-2">9</td>
                                </TableTr>
                                </tbody>
                                <tfoot>
                                <TableTr>
                                    <td className="p-2">Totals</td>
                                    <td className="p-2">21</td>
                                    <td className="p-2">23</td>
                                </TableTr>
                                </tfoot>
                            </Table>
                            <p className="mb-3">This is some additional paragraph placeholder content. It's a slightly
                                shorter version of the other highly repetitive body text used throughout.</p>
                        </article>

                        <article className="mb-5">
                            <h1>New feature</h1>
                            <ArticleDateP>{'December 14, 2020 by '}
                                <ArticleNameA href="#">Chris</ArticleNameA>
                            </ArticleDateP>
                            <p className="mb-3">This is some additional paragraph placeholder content. It has been
                                written to fill
                                the available space and show how a longer snippet of text affects the surrounding
                                content. We'll repeat it often to keep the demonstration flowing, so be on the
                                lookout for this exact same string of text.</p>
                            <ArticleUl>
                                <li>First list item</li>
                                <li>Second list item with a longer description</li>
                                <li>Third list item to close it out</li>
                            </ArticleUl>
                            <p className="mb-3">This is some additional paragraph placeholder content. It's a slightly
                                shorter
                                version of the other highly repetitive body text used throughout.</p>
                        </article>

                        <nav className="mb-5">
                            <NavBtn isActive className="mr-1">Older</NavBtn>
                            <NavBtn>Newer</NavBtn>
                        </nav>
                    </Col>

                    {/*  文章右邊區塊  */}
                    <Col col={12} md={4}>
                        <Sticky>
                            <FirstBlock className="p-4 mb-3">
                                <StickyBlockH4 className="mb-2">About</StickyBlockH4>
                                <p>Customize this section to tell your visitors a little bit about your publication,
                                    writers, content, or something else entirely. Totally up to you.</p>
                            </FirstBlock>

                            <div className="p-4">
                                <StickyBlockH4>Archives</StickyBlockH4>
                                <ArchivesOl>
                                    <li><PictureBlockA href="#">March 2021</PictureBlockA></li>
                                    <li><PictureBlockA href="#">February 2021</PictureBlockA></li>
                                    <li><PictureBlockA href="#">January 2021</PictureBlockA></li>
                                    <li><PictureBlockA href="#">December 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">November 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">October 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">September 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">August 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">July 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">June 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">May 2020</PictureBlockA></li>
                                    <li><PictureBlockA href="#">April 2020</PictureBlockA></li>
                                </ArchivesOl>
                            </div>

                            <div className="p-4">
                                <StickyBlockH4>Elsewhere</StickyBlockH4>
                                <ArchivesOl>
                                    <li><PictureBlockA href="#">GitHub</PictureBlockA></li>
                                    <li><PictureBlockA href="#">Twitter</PictureBlockA></li>
                                    <li><PictureBlockA href="#">Facebook</PictureBlockA></li>
                                </ArchivesOl>
                            </div>
                        </Sticky>
                    </Col>
                </Row>
            </Container>

            {/*  頁尾  */}
            <Footer className="py-5">
                <ArticleDateP>{'Blog template built for '}
                    <ArticleNameA href="https://getbootstrap.com/">Bootstrap</ArticleNameA>
                    {' by '}
                    <ArticleNameA href="https://twitter.com/mdo">@mdo</ArticleNameA>
                    .
                </ArticleDateP>
                <ArticleNameA href="#">Back to top</ArticleNameA>
            </Footer>
        </BlogRoot>
    );
}


export default Blog;

const Footer = styled.footer`
  background-color: rgba(248, 249, 250, 1);
  text-align: center;
  border-top: 1px solid #dee2e6;
`;

const ArchivesOl = styled.ol`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  padding-left: 0;
  list-style: none;
`;

const StickyBlockH4 = styled.h4`
  font-style: italic;
`;

const FirstBlock = styled.div`
  background-color: #f8f9fa;
  border-radius: .25rem;
`;

const Sticky = styled.div`
  top: 2rem;
  position: sticky;
  z-index: 10;
`;

const NavBtn = styled.button<{
    isActive?: boolean,
}>`
  color: #959696;
  border: 1px solid #959696;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: 50rem;

  ${props => props.isActive && `
    color: #0d6efd;;
    border: 1px solid #0d6efd;
    
    :hover{
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
    
    :focus{
      box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .5);
    }
  `}
`;

const ArticleOl = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
`;

const ArticleUl = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
`;

const TableTr = styled.tr<{
    isActive?: boolean,
}>`
  border-bottom: 1px solid #dee2e6;

  ${props => props.isActive && `
      border-bottom: 1px solid black;
    `}
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
`;

const Blockquote = styled.blockquote<{
    isActive?: boolean,
}>`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;

  ${props => props.isActive && `
        font-weight: 400;
        font-size: 1rem;
    `}
`;

const ArticleNameA = styled.a`
  color: #0d6efd;
  text-decoration: underline;

  :hover {
    color: #0a58ca;
  }
`;

const ArticleDateP = styled.p`
  margin-bottom: 1.25rem;
  color: #727272;
  font-weight: 500;
`;

const TitleH3 = styled.h3`
  border-bottom: 1px solid #dee2e6;
  font-style: italic;
`;

const Picture = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 250px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8oKKngrjN9LdcYqGD5kWBEBRV-d8WEOyNw&s");
  border-radius: 0 0.25rem 0.25rem 0;
  font-size: 1.125rem;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const PictureBlockA = styled.a`
  color: #0d6efd;
  text-decoration: underline;

  :hover {
    color: #0a58ca;
  }
`;

const DateP = styled.p`
  color: rgba(108, 117, 125, 1);
  font-weight: 500;
`;

const PictureBlockH3 = styled.h3`
  margin-top: .5rem;
`;

const PictureBlockP = styled.p<{
    isActive?: boolean,
}>`
  color: rgba(13, 110, 253, 1);
  font-weight: 900;

  ${props => props.isActive && `
    color:rgba(25, 135 ,84 ,1);
  `}
`;

const Card = styled.div`
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .4rem;
  display: flex;
`;

const DarkA = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  text-decoration: underline;
`;

const DarkP = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const DarkH1 = styled.h1`
  font-size: calc(1.475rem + 2vw);
  font-weight: 700;
  line-height: 1.2;
  font-style: italic;
`;

const DarkBlock = styled.div`
  background-color: #212529;
  color: #fff;
  border-radius: .25rem;
`;

const NavOverflow = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
`;

const SignBtn = styled.button`
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .2rem;
  color: #6c757d;
  border: 1px solid #6c757d;

  :hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  :focus {
    box-shadow: 0 0 0 .25rem rgba(108, 117, 125, .5);
  }
`;

const Logo = styled.a`
  font-size: 2.25rem;
  color: #212529;
  text-decoration: underline;

  :hover {
    color: #212529;
    text-decoration: none;
  }
`;

const Link = styled.a`
  color: #6c757d;
  text-decoration: underline;

  :hover {
    color: #565e64;
  }
`;

const BlogHeader = styled.header`
  border-bottom: 1px solid #e5e5e5;
`;

const BlogRoot = styled.div`
`;
