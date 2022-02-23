<script>
    import 'papercss/dist/paper.min.css'
    import {Navbar, Button, Card} from 'spaper';

</script>

<svelte:head>
    <title>Nik Walton</title>
</svelte:head>

<main>
  <Navbar>
      <h3 slot='brand'>Nik Walton</h3>
      <ul class = 'inline'>
        <li class='shadow shadow-hover'><a>Projects</a></li>
        <li class='shadow shadow-hover'><a>Art and Design</a></li>
        <li class='shadow shadow-hover'><a>Resume</a></li>
        <li>
            <Button>Github</Button>
        </li>
        <li>
            <Button>LinkedIn</Button>
        </li>
      </ul>
      <br />
  </Navbar>

  <div class='paper'>
  <div class='paper border'>
      <h1 class='margin padding-none'>Creating A Better Tomorrow</h1>
      <h4 class='margin padding-none'>Exploring meaningful projects both technically and artistically</h4>
      <br/>
      <br/>
      <center>
          <h2>About Me</h2>
          <p>Hi! My name is Nikolaus Walton - Nik for short - and I am student at Washington State University studying for a Bachelors of Science in Computer Science. I am expected to graduate in the spring of 2022. During my free time I like to make fun side projects, mentor students, and be part of clubs on campus.
            As a professional, I am looking for a place where I can both make a meaningful contribution and learn tremendosly on about new technology or topics in general.</p>
          <br/>
          <p>I am more skilled in the web development and mobile development front of software engineering, but have done prjoects in other areas. 
              I enjoy leadership opportunities when I know I can lead sucessfully, but I am also not afraid to put in a great amount of work along with the teams I am leading.
          </p>
          <br/>
      </center>
  </div>

  <div class='paper border-3'>
    <h2>Here's what tools I've been using lately</h2>
  </div>

  <div class='paper container-md border-5'>
      <h2>Featured Experience</h2>
      <div class='row flex-center'>
      <div class='md-4 col'>
      <Card title='CrimsonCode Hackathon'
            subTitle='Director, Organizer and Mentor 2017-2022' 
            >
        As the Director for the 2020 edition of the annual hackathon on campus at Washington State University, My team and I were able to secure $10,000 in sponsorship funding through cold-emailing and meeings which
        lead to being able to host 300 students for 24 hours in the SPARK building on campus. As a organizer and mentor for the event, I gudied new directors on the steps that need to be completed in order to host the 
        event, and gave support when needed.
        <br/>
        <br/>
        <Button type='secondary'>Daily Evergreen News Article</Button>
      </Card>
      </div>

      <div class='md-4 col'>
      <Card title='ACM Chapter President'
            subtitle='Washingotn State University 2019-2020'>
        As the chapter president of the Association For Computing Machinery club on campus, My other club officers and I organized events such as tech talks from industry, resume review, demonstrations, and networking events
        to students. My main goal in this position was to enrich what we are learning in class with topics that we typically do not interact with in the computer science degree program at Washington State Univeristy
        </Card>
        </div>
      </div>

      

  </div>
  </div>
</main>

<style>


</style>