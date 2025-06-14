---
layout: base.njk
title: Support
---

# Support

Thank you for using Retro Paddle Ball! If you're experiencing any issues or have questions about the game, I'm here to help.

## Contact Me

For any inquiries or assistance, please fill out the form below and I'll get back to you as soon as possible:

<div class="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
  <!-- Success message (hidden by default) -->
  <div id="formSuccess" class="hidden bg-green-50 border-l-4 border-green-500 p-4 mb-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-green-700">
          Thank you for your message! I'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  </div>
  
  <!-- Error message (hidden by default) -->
  <div id="formError" class="hidden bg-red-50 border-l-4 border-red-500 p-4 mb-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-red-700">
          Something went wrong. Please try again later or contact me directly.
        </p>
      </div>
    </div>
  </div>
  
  <form id="contactForm" class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    </div>
    
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
      <select id="subject" name="subject" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        <option value="bug">Bug Report</option>
        <option value="feature">Feature Request</option>
        <option value="support">Game Support</option>
        <option value="other">Other</option>
      </select>
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea id="message" name="message" rows="5" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
    </div>
    
    <div class="flex items-center">
      <button type="submit" id="submitButton" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Send Message
      </button>
      <div id="submitSpinner" class="hidden ml-3">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  </form>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const submitSpinner = document.getElementById('submitSpinner');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    if (form) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show spinner, hide success/error messages
        submitButton.disabled = true;
        submitSpinner.classList.remove('hidden');
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');
        
        // Collect form data
        const formData = new FormData(form);
        
        try {
          // Send the form data to Formspree
          const response = await fetch('https://formspree.io/f/xzzggdjv', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            // Show success message and reset form
            formSuccess.classList.remove('hidden');
            form.reset();
          } else {
            // Show error message
            formError.classList.remove('hidden');
          }
        } catch (error) {
          // Show error message
          formError.classList.remove('hidden');
        } finally {
          // Hide spinner and re-enable button
          submitButton.disabled = false;
          submitSpinner.classList.add('hidden');
        }
      });
    }
  });
</script>

## Frequently Asked Questions

### How do I report a bug?

If you encounter any bugs or technical issues while playing Retro Paddle Ball, please:

1. Visit my [GitHub Issues page](https://github.com/stanlymt/retro-paddle-ball/issues)
2. Click on "New Issue" and select "Bug Report"
3. Fill out the template with the following information:
   - Device model and operating system
   - Description of the issue
   - Steps to reproduce the bug (if possible)
   - Screenshots or video (if applicable)

You can also use the contact form above to send your bug report directly.

### When can I expect a response?

I typically respond to support inquiries within 24-48 hours during business days. For GitHub issues, you can track progress directly on the issue thread. Form submissions are checked daily.

### Is Retro Paddle Ball available on other platforms?

Currently, Retro Paddle Ball is available for:
- Windows (Microsoft Store and direct download)
- macOS (Intel & Apple Silicon)
- Android 6.0+ (phones, tablets, and TVs)

I'm actively working on:
- iOS (iPhone and iPad)

### How do I request a new feature?

I love hearing your ideas! You can:
1. Submit a feature request on my [GitHub Discussions page](https://github.com/stanlymt/retro-paddle-ball/discussions)
2. Use the contact form above and select "Feature Request" as the subject
3. Chat with me directly through the support chat

Feature suggestions from kids get bonus points! I particularly value ideas that enhance the game experience while keeping the retro feel intact.

### What controls does the game support?

Retro Paddle Ball supports multiple input methods for both single-player and two-player modes:

#### Keyboard Controls
- **Single Player:**
  - ⬅️➡️ Left/Right Arrow Keys: Move paddle left and right
  - 🔤 A/D Keys: Move aiming line left and right
  - 🚀 Space/Enter: Launch the ball

- **Two Player (additional):**
  - ⌨️ Comma/Period Keys: Move top paddle left and right
  - 🎯 Z/C Keys: Move aiming line for top paddle left and right

*Note: For two-player mode, keyboard is not recommended as the primary input method for both players.*

#### Gamepad Controls
- 🕹️ D-Pad Left/Right or Left Stick: Move your paddle
- 🔘 Left/Right Bumpers (LB/RB): Move aiming line
- 🔫 Right Trigger (RT): Launch the ball

*Same controls apply to both players with their assigned gamepads.*

#### Touch Controls
- 👆 Touch and drag on the paddle or use the paddle control buttons: Move your paddle
- 🔄 Touch and drag on the ball: Adjust the aim direction
- 👋 Release the ball after dragging: Launch the ball

*Same gestures apply to both players in two-player mode.*

#### Mouse Controls
- 🖱️ Click and drag on the paddle or use the paddle control buttons: Move your paddle
- 🔄 Click and drag on the ball: Adjust the aim direction
- 👆 Release the ball after dragging: Launch the ball

The game automatically detects your input method and adapts accordingly.

### Why did you create this game?

This game started as a passion project when my kids asked: "Can you build a game like the ones we play on RetroArch?" It's a reminder that no matter how busy life gets, we can always create something meaningful and fun.

### Are you making the source code open?

Not right now. While I believe in the spirit of open source, I'm currently keeping the code closed while I clean up and refactor the codebase. I'm happy to share learnings and answer technical questions, but the complete source isn't publicly available yet.

### Did you use AI to build this game?

Yes, I used tools like GitHub Copilot and OpenAI to accelerate certain aspects of development. However, AI is not a silver bullet - creativity, quality, and engineering decisions still required deep human thought and problem-solving.

## Game Tips & Tricks

Improve your gameplay with these expert tips:

### Paddle Control
- 🔶 **Edge vs Center:** The ball will bounce at different angles depending on where it hits your paddle. Hit with the edge for sharper angles or the center for more predictable bounces.
- ⚡ **Quick Movements:** Short, precise movements are better than large sweeps. Keep your paddle centered when possible.
- 🎯 **Sweet Spot:** Find the paddle's 'sweet spot' that gives you the most control over ball direction.

### Aiming
- 📐 **Angle Planning:** Use the aiming controls to set up the perfect shot before launching. This can give you a strategic advantage, especially in two-player matches.
- 🧠 **Think Ahead:** Plan your shots 2-3 bounces in advance, like in chess.
- 🎭 **Fake-outs:** Change your aim direction at the last moment to throw off your opponent.

### Scoring System
- 🎯 **Precision:** Points are awarded based on how close to the center of your paddle the ball hits. Perfect center hits earn maximum precision points!
- 🧘 **Control:** Keep your paddle steady when hitting the ball to earn control bonuses. Wild, jerky movements reduce your control score.
- ⚖️ **Balance:** Roughly 65% of your score comes from precision and 35% from control. A perfect hit combines both factors for maximum points.

### Extra Lives
- 💫 **Excellent Hits:** Hits that score above a certain threshold are considered 'excellent' and count toward earning extra lives.
- 🔄 **Sliding Window:** The game tracks your recent excellent hits in a sliding window of 8 attempts.
- 🏆 **Consistency Reward:** Score 5 excellent hits within this window to earn an extra life!

### Game Strategy
- 🏆 **Competitive Edge:** In two-player mode, force your opponent to the edges of their paddle for harder returns.
- 🧩 **Pattern Recognition:** Watch for patterns in your opponent's play style and adjust accordingly.
- 🛡️ **Defensive Play:** When under pressure, focus on making a clean return rather than a perfect shot.

## Updates and News

Stay informed about the latest updates, features, and news by following me on:
- [Github](https://github.com/stanlymt/retro-paddle-ball)
- [LinkedIn](https://www.linkedin.com/in/stanlymt/)

I appreciate your support and feedback as I continue to improve Retro Paddle Ball!
