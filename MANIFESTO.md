# Manifesto Team PINOCCHIO
<strong>Philosophy</strong>
1. We aspire to clean code (DRY, KISS, YAGNI, Consistency, Readability)
2. We code like it's for someone else (a lot of small files, maintainability)
3. We code device responsive (@media queries and % dimensions for width, heights can be px)
5. We work hard play hard

<strong>Rules</strong>
6. We use styled components: 
    * Info -> style: const export Info = styled.p' border: 1px solid pink;'
    * InfoTwo -> style: const export InfoTwo = styled(Info)''
    * Variables for color (global style)
    * Use 1.6rem for font-size
7. We use for navigation the "NavLink" element and conditional rendering (condition && <Component>)
8. We use 4 spaces as indentation (PyCharm default: just press TAB)
9. We $ git push origin my-branch-name (choose feature-branch-names) create a new one every time
10. We do merge requests to the "development" branch
11. After DevOps merged -> Merge local from remote "origin/development" (don't forget to fetch)
12. We deploy on "master" from "development"
13. We stick to the initial boilerplate file structure (reusable classes go into "components", rest into "pages")
14. We use verbose names 
    * Components:
        * Home
        * Item
        * Header, Footer
        * Search
        * Profile
    * Divs:
        * ComponentNameContainer
        * TopContainer
        * FormContainer
        * UsernameContainer
        * InfoContainer
    * Variables frontend: (camelCase) toggleSwitch, email, isAuthorized
    * Variables backend: (snake_case) amount_of_likes
    * Class variables backend: (PascalCase) IsAuthorized, ListAPIView
    * File names frontend: camelCase.jsx, Post.jsx (components)
    * File names backend: snake_case.py

I have read the manifesto and committed myself to it, Alex.<br/>
I have read the manifesto and committed myself to it, Sami.<br/>
I have read the manifesto and committed myself to it, Aleksandra.



