## 1. "isCurrentlyLoggedIn" : bool

-- Returns true/false based on user logged in at that instant
-- Updated on every new page open/page refresh

## 2. "username" : string

-- If user is logged-in this field will contain mobile number of logged-in user
-- Updated on every successful login-attempts
-- Deleted after user logs-out or token expires

## 3. "token" : string

-- Contains unique JWT for unique identification of user
-- Updated on every successful login-attempts

## 4. address : string

## 5. lat : string

## 6. long : string

-- Updated on every new location entry or auto-scan
