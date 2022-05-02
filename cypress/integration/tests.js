describe("Main tests", function () {  //describes collection of the tests
    it("Log in", function () {   //specific test in the collection 
        cy.visit("localhost:3000/");

        cy.contains("LOG IN").click();

        //checks was the page redirected to the correct page
        cy.url().should("include", "/login");

        //gets the email for by the id of the element 
        //inserts the value of the email and checks the value 
        cy.get("#email")
        .type("roma0963@stud.kea.dk")
        .should("have.value", "roma0963@stud.kea.dk");

        cy.get("#password")
        .type("testme")
        .should("have.value", "testme");

        cy.get("#login_button").click();
        cy.url().should("include", "/");
    });

    it("Catalog - Click each book", function () {

        //check weather user is still loged in
        cy.contains("LOG OUT");
        cy.contains("CATALOG").click();

        const total_number_of_books = 15
        const pages = Math.ceil(total_number_of_books / 8);
        var starting_book_number = 1;
        var ending_book_number = 8;

        //pagination loop
        for (let p = 0; p <= pages; p++) {
            //book loop
            for (let i = starting_book_number; i <= ending_book_number; i++) {
                //click page each time to get the page for the book
                cy.get(".w-25").get(".pagination").find("li").eq(p).click();

                //get the book
                cy.get(".g-4").get("#" + i).find(".card-title").then(($div) => {
                    const book = $div.text().split(",")[0];

                    //click the book and verify its correct page and URL 
                    $div.click();
                    cy.url().should("include", "/book/" + i);
                    cy.get(".title-book").should("contain", book);
                    cy.log("-------- Book active --------");

                    //return back to main page  -this makes app to go back to page 1-
                    cy.go("back");
                }
                );
            }

            //set correesponding book numbers for the next page
            starting_book_number = ending_book_number + 1;
            if (ending_book_number + 8 <= total_number_of_books) {
                ending_book_number = ending_book_number + 8;
            }
            else {
                ending_book_number = total_number_of_books;
            }
        }
    });

    // it("Catalog - search form", function () {
    

    //get by value
    // cy.get("input[value='Mark Manson']").click();
    // cy.get("input[value='Mary Shelley']").click();
    
    // //verify that book was found
    // cy.contains("The Subtle Art of Not Giving a F*ck");
    // cy.contains("Frankenstein");


    // cy.get("input[value='Mark Manson']").click();

    //     //search form test
    //     cy.get("#search_book")
    //     .type("Frank")
    //     .should("have.value", "Frank");

    //     cy.contains("Frankenstein");

    //     cy.get("#search_book")
    //     for (let i = 0; i < 5; i++) {
    //         cy.get("#search_book")
    //         .type("{backspace}")
    //     }
    // });
});
