<script setup>
import computerScienceLogo from '../assets/CSS_PNG-150x150.png'
</script>

<template>
  <main class="computer-science-page">
    <section class="intro">
      <div class="intro-copy">
        <p class="eyebrow">Academic Program · BSCS</p>
        <h1>Computer Science</h1>
        <p class="lead">
          The Computer Science (CS) Program is designed for students who want to study computing in
          depth.
        </p>
        <nav class="page-actions" aria-label="Computer Science page sections">
          <a class="section-button" href="#objectives">Objectives</a>
          <a class="section-button" href="#campus-life">Campus Life</a>
        </nav>
      </div>
      <img class="program-logo" :src="computerScienceLogo" alt="Computer Science Society logo" />
    </section>

    <div class="content-sections">
      <section id="objectives" class="content-card" aria-labelledby="objectives-heading">
        <h2 id="objectives-heading">Program Educational Objectives</h2>
        <ol>
          <li>
            Exhibit skills, knowledge and leadership to excel in their information technology
            careers and related discipline.
          </li>
          <li>
            Exhibit high standard of professionalism who are effective members of multi-discipline
            development teams
          </li>
          <li>
            Involved in scholarly activities, research and outreach that contributes to the
            improvement and transformation of society
          </li>
          <li>
            Demonstrate ethical, professional, spiritual values, and social responsibility
            associated with their Information Technology careers and related professions.
          </li>
          <li>
            Exhibit proficiency in the use of traditional and digital media arts, designing,
            developing and implementing digital media solutions in fields of entertainment and
            corporate environments.
          </li>
        </ol>

        <nav class="objectives-subnav" aria-label="Computer Science program information">
          <a href="#po">Program Outcomes</a>
          <a href="#rat">Curriculum Rationale</a>
          <a href="#desc">Curriculum Description</a>
          <a href="#so">Student Organization</a>
          <a href="#go">Graduate Outcomes</a>
        </nav>
      </section>

      <section
        id="po"
        class="content-card information-section"
        aria-labelledby="program-outcomes-heading"
      >
          <h3 id="program-outcomes-heading">Program Outcomes</h3>
          <h4>The graduates have the ability to</h4>
          <ol type="a">
            <li>
              Articulate and discuss the latest developments in the specific field of practice.
              (Philippine Qualifications Framework (PQF) level 6 descriptor) (Graduate Outcomes:
              CS 10, IS 10, IT13).
            </li>
            <li>
              Effectively communicate orally and in writing using both English and Filipino
              (Graduate Outcomes: CS08, 1508, IT10).
            </li>
            <li>
              Work effectively and independently in multi-disciplinary and multi-cultural teams.
              (PQF level 6 descriptor) (Graduate Outcomes: CS07, ISO?, IT08).
            </li>
            <li>
              Act in recognition of professional, social and ethical responsibility
              (Graduate Outcomes:CS09, 1509, IT12).
            </li>
            <li>Preserve and promote “Filipino historical and cultural heritage” (based on RA 7722).</li>
          </ol>

          <h4>The graduates of BSCS, BSIS, and BSIT must have the ability to</h4>
          <ol type="a">
            <li>
              Analyze complex problems, and identify and define the computing requirements needed
              to design an appropriate solution (Graduate Outcomes:CS02, 1502-03, IT03).
            </li>
            <li>
              Apply computing and other knowledge domains to address real-world problems
              (Graduate Outcomes: CSO 1, 1501, IT01).
            </li>
            <li>
              Design and develop computing solutions using a system-level perspective
              (Graduate Outcomes: CS03-05, 1504-05, IT05).
            </li>
            <li>Utilize modern computing tools (Graduate Outcomes: CSOS, ISOS, IT07).</li>
          </ol>
          <p class="source-note">Based on CHED Memo Order No. 25 s. 2015. Effective: Academic Year 2018-2019.</p>
      </section>

      <section
        id="rat"
        class="content-card information-section"
        aria-labelledby="rationale-heading"
      >
          <h3 id="rationale-heading">Curriculum Rationale</h3>
          <p>
            The computing field has grown enormously and is described as dynamic. It encompasses
            computer engineering, software engineering, computer science, information systems, and
            information technology. Based on the Guidelines for the Implementation of CMO 46 s 2012
            which implements the shift to learning competency-based standards/outcomes-based
            education, the Commission released CMO 25 s 2015 last August 2015 that integrates the
            outcomes-based education. It specifies the “core competencies” expected of graduates of
            Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information
            Systems (BSIS) and Bachelor of Science in Information Technology (BSIT). The Commission
            recognizes the need to be responsive to the current needs of the country and in order
            to face the challenges of advancement. It is essential and important that the country’s
            computing capability be continually developed and strengthened. In this PSG it clearly
            defines the area of focus for each field, common outcomes for each discipline and new
            GE for K-12 program. In the PSG it defines the BSCS program that includes the study of
            computing concepts and theories, algorithmic foundations and new developments in
            computing. The program prepares students to design and create algorithmically complex
            software and develop new and effective algorithms for solving computing problems.
          </p>
      </section>

      <section
        id="desc"
        class="content-card information-section"
        aria-labelledby="curriculum-heading"
      >
          <h3 id="curriculum-heading">Curriculum Description</h3>
          <ul>
            <li>
              The BSCS curriculum includes foundation and professional courses that cover theory,
              algorithms, software design and development, and new developments in computing.
            </li>
            <li>
              The curriculum should include courses to cover Knowledge Areas recommended in ACM
              Computer Science Curricula 2013 (enumerated in PSG).
            </li>
            <li>Defines eleven (11) Knowledge Areas:</li>
          </ul>
          <ul class="knowledge-areas">
            <li>Algorithms and Complexity</li>
            <li>Architecture and Organization</li>
            <li>Discreet Structures</li>
            <li>Human Computer Interaction</li>
            <li>Information Assurance and Security</li>
            <li>Networks and Communications</li>
            <li>Operating Systems</li>
            <li>Programming Languages (Design and Implementation)</li>
            <li>Software Development Fundamentals</li>
            <li>Software Engineering</li>
            <li>Social Issues and Professional Practice</li>
          </ul>
      </section>

      <section id="campus-life" class="content-card" aria-labelledby="campus-life-heading">
        <span id="so" class="anchor-target"></span>
        <h2 id="campus-life-heading">Student Organization and Campus Life</h2>
        <img
          class="organization-logo"
          :src="computerScienceLogo"
          alt="Computer Science Society logo"
        />
        <p class="campus-life-copy">
          The Computer Science Society embraces its Mission to promote the Computer Science Course,
          to guide and prepare the students, to grow and strengthen the bonds of each member as one
          family, and to utilize the resources of the program to provide service to society and
          emphasize to students the need of lifelong learning, ethical conduct and an understanding
          of the diverse social context in which Computer Science is practiced. We furthermore seek
          to provide excellence in activities and outreaches to develop the community of all
          Computer Science Students to help and support its members to reach their goals in the
          ever advance, 21st century.
        </p>
      </section>

      <section
        id="go"
        class="content-card information-section graduate-outcomes"
        aria-labelledby="graduate-outcomes-heading"
      >
          <h3 class="degree-heading">Bachelor of Science in Computer Science (BSCS)</h3>
          <h4 id="graduate-outcomes-heading">Graduate Outcomes</h4>
          <div class="outcomes-table-wrap">
            <table class="outcomes-table">
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Graduate Outcomes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">CS01</th>
                  <td>
                    Apply knowledge of computing fundamentals, knowledge of a computing
                    specialization, and mathematics, science, and domain knowledge appropriate for
                    the computing specialization to the abstraction and conceptualization of
                    computing models from defined problems and requirements.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS02</th>
                  <td>
                    Identify, analyze, formulate, research literature, and solve complex computing
                    problems and requirements reaching substantiated conclusions using fundamental
                    principles of mathematics, computing sciences, and relevant domain disciplines.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS03</th>
                  <td>
                    An ability to apply mathematical foundations, algorithmic principles and
                    computer science theory in the modeling and design of computer-based systems in
                    a way that demonstrates comprehension of the tradeoffs involved in decision
                    choices.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS04</th>
                  <td>
                    Knowledge and understanding of information security issues in relation to the
                    design, development and use of information systems.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS05</th>
                  <td>
                    Design and evaluate solutions for complex computing problems, and design and
                    evaluate systems, components, or processes that meet specified needs with
                    appropriate consideration for public health and safety, cultural, societal, and
                    environmental considerations.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS06</th>
                  <td>
                    Create, select, adapt and apply appropriate techniques, resources and modern
                    computing tools to complex computing activities, with an understanding of the
                    limitations to accomplish a common goal.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS07</th>
                  <td>
                    Function effectively as an individual and as a member or leader in diverse
                    teams and in multidisciplinary settings.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS08</th>
                  <td>
                    Communicate effectively with the computing community and with society at large
                    about complex computing activities by being able to comprehend and write
                    effective reports, design documentation, make effective presentations, and give
                    and understand clear instructions.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS09</th>
                  <td>
                    An ability to recognize the legal, social, ethical and professional issues
                    involved in the utilization of computer technology and be guided by the adoption
                    of appropriate professional, ethical and legal practices.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CS10</th>
                  <td>
                    Recognize the need, and have the ability, to engage in independent learning for
                    continual development as a computing professional.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <blockquote class="program-quote">
            “An academic program for designing interfaces like never before.”
          </blockquote>
      </section>
    </div>
  </main>
</template>

<style scoped>
.computer-science-page {
  min-height: 100vh;
  padding: 7rem max(1.5rem, calc((100vw - 900px) / 2)) 4rem;
  background: #e5e5e5;
  color: #1a1a1a;
}

.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(2rem, 7vw, 5rem);
  background: #244b53;
  color: #ffffff;
}

.intro-copy {
  max-width: 620px;
}

.program-logo {
  flex: 0 0 auto;
  width: clamp(100px, 18vw, 180px);
  height: clamp(100px, 18vw, 180px);
  object-fit: contain;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: #e5bd69;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  max-width: 700px;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 500;
  line-height: 1.05;
}

.lead {
  max-width: 580px;
  margin: 1.5rem 0 0;
  color: #e5eeee;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.7;
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.section-button {
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid #e5bd69;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.section-button:hover,
.section-button:focus-visible {
  background: #e5bd69;
  color: #244b53;
}

.content-sections {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  padding: 1rem 0;
}

.content-card {
  grid-column: 1 / -1;
  min-width: 0;
  scroll-margin-top: 5rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: #ffffff;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
}

.section-label {
  margin: 0 0 0.8rem;
  color: #8a6a16;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
}

.content-card h2 {
  margin: 0;
  color: #244b53;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  text-align: center;
}

.content-card > p:last-child {
  margin: 1rem 0 0;
  color: #5e6870;
  line-height: 1.8;
  text-align: justify;
}

.campus-life-copy {
  text-indent: 2em;
  text-align: justify;
}

.content-card ol {
  display: grid;
  gap: 0.9rem;
  margin: 1.25rem 0 0;
  padding-left: 1.4rem;
  color: #5e6870;
  line-height: 1.8;
  text-align: justify;
}

.objectives-subnav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #d8dde0;
  border-bottom: 1px solid #d8dde0;
}

.objectives-subnav a {
  color: #244b53;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration-color: #8a6a16;
  text-underline-offset: 0.2em;
}

.information-section {
  scroll-margin-top: 5rem;
  padding-top: clamp(1.5rem, 4vw, 2.5rem);
}

.information-section h3 {
  margin: 0;
  color: #244b53;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  font-weight: 500;
}

.information-section .degree-heading {
  text-align: center;
}

.information-section h4 {
  margin: 1.5rem 0 0;
  color: #344f54;
  font-size: 1rem;
}

.information-section p,
.information-section li {
  color: #5e6870;
  line-height: 1.8;
  text-align: justify;
}

.information-section p {
  margin: 1rem 0 0;
}

.information-section ol,
.information-section ul {
  display: grid;
  gap: 0.7rem;
  margin: 1rem 0 0;
  padding-left: 1.5rem;
}

.information-section .knowledge-areas {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-left: 0;
  list-style: none;
}

.information-section .knowledge-areas li {
  position: relative;
  padding-left: 1.25rem;
}

.information-section .knowledge-areas li::before {
  position: absolute;
  left: 0;
  content: '-';
}

.outcomes-table-wrap {
  overflow-x: auto;
  margin-top: 1rem;
}

.outcomes-table {
  width: 100%;
  border-collapse: collapse;
  color: #5e6870;
  line-height: 1.8;
}

.outcomes-table th,
.outcomes-table td {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid #d8dde0;
  text-align: justify;
  vertical-align: top;
}

.outcomes-table thead th {
  background: #244b53;
  color: #ffffff;
  text-align: left;
}

.outcomes-table tbody th {
  width: 5rem;
  color: #244b53;
  text-align: left;
  white-space: nowrap;
}

.program-quote {
  margin: 2rem 0 0;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid #8a6a16;
  background: #f5f7fb;
  color: #244b53;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-style: italic;
  text-align: center;
}

.organization-logo {
  width: 120px;
  height: 120px;
  margin: 1.5rem auto;
  object-fit: contain;
}

.source-note {
  font-size: 0.85rem;
  font-style: italic;
  text-align: center;
}

.information-section p.source-note {
  text-align: center;
}

.anchor-target {
  display: block;
  scroll-margin-top: 5rem;
}

@media (max-width: 640px) {
  .computer-science-page {
    padding-top: 6rem;
  }

  .intro {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .content-sections {
    grid-template-columns: 1fr;
  }

  .information-section .knowledge-areas {
    grid-template-columns: 1fr;
  }

  .outcomes-table th,
  .outcomes-table td {
    padding: 0.7rem;
  }
}
</style>
