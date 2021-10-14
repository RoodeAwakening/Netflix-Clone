const getMovieBlock = () => cy.get('[data-testid=large-movie-block-2]')


// beforeEach(()=>{
//   cy.visit('http://localhost:3000/')
// })


describe('Main Page',()=>{
  it('visits the main page',()=>{
    cy.visit('http://localhost:3000/')

    
  })

  it('contains all of the correct headers',()=>{
    cy.contains('Trending')
    cy.contains('Netflix Originals')
    cy.contains('Top Rated')
    cy.contains('Action Movies')
    cy.contains('Comedy Movies')
    cy.contains('Horror Movies')
    cy.contains('Romance Movies')
    cy.contains('Documentaries')
  })

  it('clicks the second trending video',()=>{
    cy.get("[data-testid=large-movie-block-2]").click()
    cy.wait(2000)
  })

  it('verifys that a trailer starts playing ', ()=>{
    cy.get("[data-testid=movie-trailer]")
  })

  it('closes the video',()=>{
    cy.get("[data-testid=large-movie-block-2]").click()
  })
})

