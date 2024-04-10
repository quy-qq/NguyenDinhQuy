# Score Update API Service

## Overview

This API service module is designed to facilitate the real-time update of the top 10 user scores displayed on our website's scoreboard. It provides an endpoint for receiving score update requests from the frontend when a user completes a specific action. The module ensures the security and integrity of the scoreboard by implementing authorization checks to prevent malicious score manipulations.

## Table of Contents

1. [Endpoints](#endpoints)
2. [Authentication](#authentication)
3. [Request Format](#request-format)
4. [Response Format](#response-format)
5. [WebSocket Flow](#webSocket-flow)
6. [Improvements](#improvements)

---

## Endpoints

### `POST /update-score`

Updates the user's score on the server.

---

## Authentication

To prevent unauthorized score updates, the API requires an authentication token to be included in the request header.

- **Header**
  - `Authorization: Bearer YOUR_AUTH_TOKEN`

---

## Request Format

- **Method**: `POST`
- **Endpoint**: `/update-score`
- **Headers**:
  - `Authorization: Bearer YOUR_AUTH_TOKEN`
- **Body**:

  ```json
  {
    "userId": "string",
    "score": integer
  }

  Response Format
  Success Response:
  Status Code: 200 OK
  Body:{
  "success": true,
  "message": "Score updated successfully"
  }
  ```

  Error Response:
  Status Code: 400 Bad Request or 401 Unauthorized
  Body:{
  "success": false,
  "message": "Error message describing the issue"
  }

## WebSocket Flow

Here's a diagram illustrating the flow of execution for the score update process:
[Frontend] [Backend API Service] [Score Database]
| | |
|------- WebSocket Connect ---->| |
| | |
| |<---- WebSocket Acknowledge -------|
| | |
|------- Score Update Event ---->| |
| | |
| |------ Validate Auth Token ------->|
| | |
| |------ Update User's Score ------->|
| | |
|<----- WebSocket Update ------| |
| | |

--->: Request
<---: Response
WebSocket Connect: Connection initiation
WebSocket Acknowledge: Server acknowledgment of the connection
Score Update Event: Event triggered from frontend to update the score
WebSocket Update: Real-time score update sent via WebSocket

## Improvements

Rate Limiting: Implement rate limiting to prevent abuse of the API.
Logging: Add detailed logging for each score update request for audit purposes.
Enhanced Authorization: Consider implementing more robust authentication and authorization mechanisms, such as OAuth or JWT.
