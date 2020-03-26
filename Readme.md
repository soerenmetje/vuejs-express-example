# Project structure for Dashboard
Two components running in their own process:
1. Frontend
2. Backend
## Remaining Questions
1. How to handle **further data requests**
   - Option A: 
        1. store jwt on login in **backend DB**
        2. send jwt to client (already happening)
        3. attach jwt to each **further request** done by client
        4. check in backend if jwt is in DB
## Comments
1. Probably session- or cookie based token storage would be better -> more research needed
