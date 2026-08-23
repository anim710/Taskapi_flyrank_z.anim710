# Express.js + Supabase Authentication API

A lightweight, secure REST API built with **Express.js** and **Supabase Auth** featuring JWT-based token authorization, public and protected routes, and interactive **Swagger OpenAPI** documentation.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** Supabase Auth (Email/Password)
- **Documentation:** Swagger UI (`swagger-ui-express`, `swagger-jsdoc`)
- **Testing:** `curl` / Postman / Swagger UI

---

## 📁 Project Structure

```text
├── config/
│   ├── supabase.js      # Supabase client setup
│   └── swagger.js       # Swagger OpenAPI specification
├── middleware/
│   └── authMiddleware.js # JWT verification guard
├── routes/
│   ├── authRoutes.js    # Signup, Login, and Logout
│   ├── publicRoutes.js  # Unprotected routes (/public/info)
│   └── protectedRoutes.js # Token-protected routes (/profile, /dashboard)
├── .env                 # Environment variables (git-ignored)
├── index.js             # Express app initialization & server entry point
└── package.json


🚀 Getting Started
1. Prerequisites
Node.js (v16 or higher)

A Supabase project

2. Environment Setup
Create a .env file in the root directory:
PORT=3000
SUPABASE_URL=[https://your-supabase-project.supabase.co](https://your-supabase-project.supabase.co)
SUPABASE_KEY=your-supabase-anon-key


3. Install Dependencies Bash npm install
4. Run the Server Bash node index.js
The server will start at http://localhost:3000.📖 API Documentation & EndpointsInteractive Swagger UI documentation is available at:👉 http://localhost:3000/api-docsSummary of EndpointsMethodEndpointAuth RequiredDescriptionPOST/auth/signup❌ NoRegister a new userPOST/auth/login❌ NoAuthenticate user and obtain access tokenPOST/auth/logout✅ YesInvalidate user sessionGET/public/info❌ NoAccess public informationGET/protected/profile✅ YesGet authenticated user profileGET/protected/dashboard✅ YesAccess protected user dashboard🧪 Testing via curl1. Sign UpBashcurl -i -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@gmail.com", "password":"password123"}'
2. Log InBashcurl -i -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@gmail.com", "password":"password123"}'
Copy the access_token returned in the response JSON.3. Access Protected RouteBashcurl -i http://localhost:3000/protected/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
4. Log OutBashcurl -i -X POST http://localhost:3000/auth/logout \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
