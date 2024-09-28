Read Journay:

Technical task:
https://docs.google.com/spreadsheets/d/1_f4IZzXDs6QhQq3mOCOMktYasPW1XphdTO82rdrkyW8/edit?gid=1060862504#gid=1060862504

Backend (swagger):
https://readjourney.b.goit.study/api-docs/

Layout (figma):
https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING?type=design&node-id=18743%3A4973&mode=design&t=Hi1KTaUJMogWXZzz-1



Read App Journey Overview

1. Registration Page
URL: /register
Description: The Registration Page allows new users to create an account. Users must provide essential information to register and gain access to the platform's features.

2. Login Page
URL: /login
Description: The Login Page is where users enter their credentials to access their accounts. It enables registered users to sign in and use the platform.

Authenticated User Experience. Once logged in, users are directed to the main interface, which includes the following:

3. Recommended (Home) Page
URL: /recommended
Description: The Recommended Page consists of two main sections:

    1) Dashboard Panel: Includes the following blocks:

        - Filters Block: This block is implemented as a form containing two input fields and a "To Apply" submit button, helping users find books among the recommended ones.

        - Application Functionality Description Block: Contains a brief description of the application's functionality and a link to the "My Library" page.

        - Quote Block: Displays a static quote.

    2) Recommended Books Block: Includes:

        - Page Title: The title of the page.

        - Pagination: Implemented as "server-side" pagination, passing the page number and the number of items per page as parameters in the server request. Pagination always includes "back" and "forward" arrows.

        -List of Recommended Books: Presented as a list of cards, each containing: Book cover image, Book title,Author name. Clicking on the book cover opens a modal window with detailed information about the book and an "Add to Library" button, allowing the user to add the book to their personal library.

4. Library Books Page
URL: /library
Description: The Library Page consists of:
    1) Dashboard Panel: Provides an overview of the user's library and quick access to various functionalities.
    2) MyLibraryBooks Block: Displays the books that the user has added to their personal library, allowing easy management and viewing of their collection. This block includes:
        - Page Title: The title of the page.

        - Filter Select: A dropdown select that allows users to filter books in their library based on their reading status.

        - User's Book List: Displays a list of the user's books as a series of cards, where each card includes: Cover image of the book, Title of the book, Author of the book, a button that, when clicked, sends a request to the server to remove the book from the user's library. Clicking on the book cover opens a modal window that presents detailed information about the book, along with a "Start Reading" button that allows the user to begin reading by navigating to the Reading Page.

5. Current Reading Page
URL: /reading
Description: The Reading Page displays the current reading status, including progress on ongoing books, chapters read, and any notes or highlights. The page includes:

    Add Reading Block:

        - Input Field: For entering the page number where the user starts or stops reading. Submit Button: The button's label toggles between "To Start" and "To Stop," depending on the reading phase. When the user clicks the "To Start" button, a request is sent to the backend to save the page number from which the user begins reading. When the user clicks the "To Stop" button, a request is sent to the backend to save the page number at which the user stops reading.

        - Details Block: This section provides detailed information regarding the user's reading progress in one of the following formats: 
            - Diary Component: Tracks reading events by date, showing the number of pages read, time spent reading, and the percentage of pages read compared to the total number of pages in the book. 
            - Statistics Component: Presented as a graph that allows users to track their reading progress over time.

