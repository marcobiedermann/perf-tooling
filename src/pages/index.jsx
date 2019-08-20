import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Column from '../components/Column';
import Contributors from '../components/Contributors';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import * as routes from '../constants/routes';

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allArticlesJson {
          totalCount
        }
        allAuditsJson {
          totalCount
        }
        allBooksJson {
          totalCount
        }
        allContributors(
          filter: { login: { nin: ["ben-eb", "marcobiedermann", "marhigh", "radibit", "stefanjudis"] } }
        ) {
          edges {
            node {
              id
              avatar_url
              html_url
              login
            }
          }
        }
        allCoursesJson {
          totalCount
        }
        allSlidesJson {
          totalCount
        }
        allToolsJson {
          totalCount
        }
        allVideosJson {
          totalCount
        }
      }
    `,
  );

  const {
    allArticlesJson: { totalCount: totalArticles },
    allAuditsJson: { totalCount: totalAudits },
    allBooksJson: { totalCount: totalBooks },
    allContributors: { edges: contributors },
    allCoursesJson: { totalCount: totalCourses },
    allSlidesJson: { totalCount: totalSlides },
    allToolsJson: { totalCount: totalTools },
    allVideosJson: { totalCount: totalVideos },
  } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <Grid>
          <figure>
            <img src="images/perf-tooling.svg" alt="perf-tooling logo" width="546" height="370" />
          </figure>
          <h1>perf-tooling.today</h1>
          <h2>Start performance tooling today</h2>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Automate. Monitor. Improve.</h2>
          <h3>
            Perf-tooling is a collection of powerful resources which will help you to improve your workflow and to
            deliver better and faster websites.
          </h3>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Row>
            <Column columnSpan={6}>
              <h3>{totalTools} Tools</h3>
              <p>
                A rich collection of tools available to optimize and/or monitor your website’s performance including
                bookmarklets, browser extensions, command line tools, node modules and grunt/gulp tasks.
              </p>
              <p>
                <Link to={routes.TOOLS.path}>Explore Tools</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalArticles} Articles</h3>
              <p>
                An exclusive list of articles about best practices to build fast websites which will make your visitors
                happy.
              </p>
              <p>
                <Link to={routes.ARTICLES.path}>Explore Articles</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalVideos} Videos</h3>
              <p>
                A collection of recent videos including performance-specific tips and tricks to build better and faster
                websites.
              </p>
              <p>
                <Link to={routes.VIDEOS.path}>Explore Videos</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalSlides} Slidedecks</h3>
              <p>A library of slides from great talks covering performance-related topics.</p>
              <p>
                <Link to={routes.SLIDES.path}>Explore Slidedecks</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalBooks} Books</h3>
              <p>
                Our books section features recommended books from some of the most influential authors in the field.
              </p>
              <p>
                <Link to={routes.BOOKS.path}>Explore Books</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalCourses} Courses</h3>
              <p>For self-learners, we include courses to get you going.</p>
              <p>
                <Link to={routes.COURSES.path}>Explore Courses</Link>
              </p>
            </Column>
            <Column columnSpan={6}>
              <h3>{totalAudits} Audits</h3>
              <p>
                Our books section features recommended books from some of the most influential authors in the field.
              </p>
              <p>
                <Link to={routes.AUDITS.path}>Explore Audits</Link>
              </p>
            </Column>
          </Row>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Contribution</h2>
          <p>
            You want to add a tool? Great!
            <br />
            Either{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/issues"
              title="Link to repository issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              create an issue
            </a>{' '}
            and we’ll add it to perf-tooling.today.
          </p>
          <p>
            Or propose a pull request and add a tool by adding a new JSON file to the{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/tree/master/data"
              title="Link to data folder"
              target="_blank"
              rel="noopener noreferrer"
            >
              data folder
            </a>
            . The JSON files in these folders will be automatically rendered using a template based in the{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/tree/master/templates"
              title="Link to templates folder"
              target="_blank"
              rel="noopener noreferrer"
            >
              templates folder
            </a>
            . For more detailed information check the{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/blob/master/.github/CONTRIBUTING.md"
              title="Link to contributing readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTRIBUTING.md
            </a>
            .
          </p>
          <p>
            <em>By proposing a pull request you will be added to the footer contributors list automatically.</em>
          </p>
          <p>
            We would like this project to become a shared resource maintained by the community, so if you have any ideas
            on how to improve it or make it better, please let us know and{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/issues"
              title="Link to repository issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              file an issue on Github.
            </a>
          </p>
          <p>
            <a
              href="https://github.com/stefanjudis/perf-tooling/issues"
              title="Link to repository issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a resource
            </a>{' '}
            <a
              href="https://github.com/stefanjudis/perf-tooling/blob/master/.github/CONTRIBUTING.md"
              title="Link to contribute readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute to project
            </a>
          </p>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <p>
            <a
              href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fperf-tooling.today&amp;text=@perf_tooling%20A%20resource%20collection%20to%20improve%20your%20workflow%20and%20to%20deliver%20better%20and%20faster%20websites%20%23perfmatters"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spread on Twitter
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/perf_tooling"
              title="perf-tooling on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow <strong>@perf_tooling</strong> on Twitter
            </a>
          </p>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Newsletter</h2>
          <p>
            Subscribe to{' '}
            <a href="https://perf.email" rel="noopener noreferrer" target="_blank">
              perf.email
            </a>
            , a newsletter about performance and user experience.
          </p>
          <p>
            <a
              href="https://calibreapp.us2.list-manage.com/subscribe?u=9067434ef642e9c92aa7453d2&amp;id=7cba5dc7bd"
              rel="noopener noreferrer"
              target="_blank"
            >
              Subscribe to perf.email
            </a>
          </p>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h2>Built by the Perf Tooling Team</h2>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <p>…with a little help from our friends</p>
          <Contributors contributors={contributors.map(contributor => contributor.node)} />
        </Grid>
      </Section>
      <Section>
        <Grid>
          <h4>Sponsored by</h4>
          <p>
            <a href="https://www.fastly.com/" title="Link to Fastly CDN" target="_blank" rel="noopener noreferrer">
              <img
                src="images/fastly_grey.svg"
                alt="Logo of CDN Fastly"
                width="160"
                height="72"
                className="center-block"
              />
            </a>
          </p>
          <p>
            <a
              href="https://calibreapp.com/"
              title="Link to Calibre performance monitoring"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/calibre_grey.svg" alt="Logo of Calibre" width="180" className="center-block" />
            </a>
          </p>
        </Grid>
      </Section>
    </Layout>
  );
};

export default IndexPage;
