function getBotResponse(input){

    input = input.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    // print(input)

    if (input.includes("hey") ||
        input.includes("sup") ||
        input.includes("what's up") ||
        input.includes("hie") ||
        input.includes("hello") ||
        input.includes("what's up")){
        return "Hello there! <br /> <br />I'm a bot and I am here to answer your questions and assist you if you require extra assistance.";
    }

    else if (input.includes("goodbye") ||
             input.includes("bye") ||
             input == "see you" ||
             input == "see ya" ||
             input == "see you later" ||
             input == "have a good day"){
             return "Goodbye!";
    }


    else if (input.includes("how are you") ||
             input.includes("how are you doing") ||
             input.includes("are you fine") ||
             input.includes("are you okay?")){
             return "I am fine, thank you! How can I help you?";
    }

    else if (input.includes("help!") ||
             input.includes("help") ||
             input.includes("help me") ||
             input.includes("help me!")){
             return "Contact us at for further assistance. The  contact information is available on our main page.";
    }

    else if (input.includes("donate") ||
             input.includes("how do i donate to school") ||
             input.includes("donating") ||
             input.includes("I want to donate") ||
             input.includes("donating to school") ||
             input.includes("process of donating") ||
             input.includes("donation process") ||
             input.includes("donation details") ||
             input.includes("donation")){
             return "We really appreciate your kind heart to support our school.  <br /><br />  Kindly, visit our donation page to complete donation process. Thank you!";
    }

    else if (input.includes("fine") ||
             input.includes("alright") ||
             input.includes("okay") ||
             input.includes("i see") ||
             input.includes("okay, sure") ||
             input.includes("sure") ||
             input.includes("perfect") ||
             input.includes("definitely") ||
             input.includes("absolutely") ||
             input.includes("exactly") ||
             input.includes("yeah!") ||
             input.includes("great!") ||
             input.includes(" nice!") ||
             input.includes("good")){
             return"Great, I am glad you agree";
     }

    else if (input.includes("i am tired") ||
             input.includes("i am sleepy") ||
             input.includes("i feel sick") ||
             input.includes("i am bore") ||
             input.includes("i feel lazy") ||
             input.includes("i am stressed") ||
             input.includes("i am pressured") ||
             input.includes("i feel emotional") ||
             input.includes("i am emotional") ||
             input.includes("i am sick") ||
             input.includes("i have headache") ||
             input.includes("i am angry") ||
             input.includes("i am weak")){
             return" I am sorry about that! Could you please consider sports, mediation, sleep or eating health food or drinking enough. <br /><br />  If it does not work for you try to reach out to medical doctors for help.";
    }
    else if (input.includes("report issues") ||
             input.includes("report issue") ||
             input.includes("report") ||
             input.includes("issues")||
             input.includes("problem")||
             input.includes("trouble")||
             input.includes("fault")){
             return "If you have any issues or complaints, please reach out to us via our contacts available on the main page!";
    }

    else if (input.includes("comment") ||
             input.includes("can I comment on the posts") ||
             input.includes("commenting on posted") ||
             input.includes("commenting on posted topics") ||
             input.includes("commenting ")){
             return " you can comment on different posts posted here. You can a create a post as well. ";
    }

    else if (input.includes("privacy") ||
             input.includes("my privacy") ||
             input.includes("are my credentials safe?")){
             return "Your login details are very safe and known by only you <br />If you suspect somebody to have access to them, kindly change them. Make sure you don't share them with someone.";
    }

    else if (input.includes("internet") ||
             input.includes("wifi") ||
             input.includes("wifi internet") ||
             input.includes("wifi internet service")){
             return " We have a very good and reliable wifi internet service available at the hostel and on every place on campus.";
    }

    else if(input.includes("profile") ||
            input.includes("Profile edit") ||
            input.includes("profile details") ||
            input.includes("can I edit my profile") ||
            input.includes("can I edit my profile?")){
            return "Your profile is editable. However, you are limited to edit your own profile";
    }

    else if (input.includes("what is your name") ||
             input.includes("who are you") ||
             input.includes("What is your name") ||
             input.includes("your name?")){
             return "My name is AI Assistant, I am a bot that is here to answer all questions you might have.";
    }

    else if (input.includes("what is your purpose") ||
             input.includes("your purpose") ||
             input.includes("what is your purpose?")){
             return "I am here to answer any questions or complaints you have.";
    }

    else if (input.includes("Love!") ||
             input.includes("love") ||
             input.includes("love you") ||
             input.includes("love you!") ||
             input.includes("love you!")){
             return "Thank you for the positive feedback. We are always here to help you.";
    }

    else if (input.includes("goodbye") ||
             input.includes("bye") ||
             input.includes("Goodbye") ||
             input.includes("Bye")){
             return "Have a nice day!";
    }

    else if (input.includes("good morning") ||
             input.includes("good morning!") ||
             input.includes("good morning!") ||
             input.includes("good morning") ||
             input.includes("good morning!")){
             return "Good morning!";
    }

    else if (input.includes("good afternoon") ||
             input.includes("good afternoon!") ||
             input.includes("good afternoon") ||
             input.includes("good afternoon!")){
             return "Good afternoon!";
    }

    else if (input.includes("good evening") ||
             input.includes("good evening!") ||
             input.includes("good evening") ||
             input.includes("good evening!")){
             return "Good evening!";
    }

    else if (input.includes("good night") ||
             input.includes("good night!") ||
             input.includes("good night") ||
             input.includes("good night!")){
             return "Good night!";
    }
    else if (input.includes("thank you") ||
             input.includes("thanks") ||
             input.includes("appreciate it") ||
             input.includes("much obliged") ||
             input.includes("grateful") ||
             input.includes("thankful")) {
             return "You're welcome!";
    }

    else if (input.includes("register") ||
             input.includes("sign up") ||
             input.includes("create account") ) {
             return "To register, go to our website's registration page and fill in the required information.";
    }

    else if (input.includes("login") ||
             input.includes("sign in") ||
             input.includes("log in") ) {h
             return "You can log in by visiting our website and entering your credentials on the login page.";
    }

    else if (input.includes("post") ||
             input.includes("create a post") ||
             input.includes("make a post") ||
             input.includes("share a thought")) {
            return "To create a post, go to the 'Create Post' section on the app and share your thoughts with the alumni community.";
        }

    else if (input.includes("comment") ||
             input.includes("leave a comment") ||
             input.includes("reply to a post") ) {
             return "You can leave comments on posts by clicking on the comment section and typing your response.";
    }

    else if (input.includes("like") ||
             input.includes("thumbs up") ||
             input.includes("heart") ||
             input.includes("react")) {
             return "You can like or react to posts by clicking on the respective reaction icon below each post.";
    }

    else if (input.includes("share") ||
             input.includes("share a post") ||
             input.includes("spread the word") ) {
             return "To share a post, click on the 'Share' button below the post and choose where you want to share it.";
    }

   else if (input.includes("donate") ||
            input.includes("support") ||
            input.includes("contribute") ) {
            return "You can donate to our school by visiting the donation section on our website and following the instructions provided.";
   }

   else if (input.includes("message") ||
             input.includes("send a message") ||
             input.includes("private message") ) {
             return "To send a message, navigate to the messaging section and select the user you want to message. Then, compose and send your message.";
   }

   else if (input.includes("notification") ||
             input.includes("get notified") ||
             input.includes("alerts")) {
            return "You'll receive notifications for new messages in your inbox, comments on your posts, and other important updates. You can manage notifications in your account settings.";
   }

   else if (input.includes("search users") ||
             input.includes("find friends") ||
             input.includes("look for people")) {
             return "You can search for users by using the search bar and entering their name or username.";
   }

   else if (input.includes("change password") ||
             input.includes("update password") ||
             input.includes("reset password")) {
             return "To change your password, go to the account settings section and choose the 'Change Password' option.";
   }

   else if (input.includes("delete account") ||
             input.includes("remove account") ||
             input.includes("close account")) {
             return "If you want to delete your account, contact our support team for assistance in closing your account permanently.";
   }

   else if (input.includes("view posts") ||
             input.includes("see posts") ||
             input.includes("explore posts")) {
             return "You can view all posts by navigating to the 'Posts' section on the app.";
   }

    else if (input.includes("customize notifications") ||
             input.includes("manage alerts") ||
             input.includes("control notifications")) {
             return "You can customize your notification preferences in the settings menu by selecting 'Notification Settings'.";
   }

    else if (input.includes("view messages") ||
             input.includes("see chats") ||
             input.includes("explore conversations")) {
             return "To view your messages and conversations, go to the messaging section or inbox.";
    }

    else if (input.includes("check updates") ||
             input.includes("see latest news") ||
             input.includes("explore announcements")) {
             return "You can check for updates and announcements in the 'News' or 'Announcements' section.";
    }

    else if (input.includes("add friend") ||
             input.includes("connect with") ||
             input.includes("send friend request") ) {
             return "You can add friends by visiting their profile and clicking on the 'Add Friend' button.";
   }

   else if (input.includes("accept friend request") ||
            input.includes("approve friend request") ||
            input.includes("confirm friend request")) {
            return "To accept a friend request, go to your friend requests section and click on the 'Accept' button next to the request.";
   }

   else if (input.includes("reject friend request") ||
            input.includes("ignore friend request") ||
            input.includes("decline friend request") ) {
            return "You can reject a friend request by going to your friend requests section and clicking on the 'Reject' button next to the request.";
    }

    else if (input.includes("block user") ||
             input.includes("report user") ||
             input.includes("flag user") ) {
             return "If you encounter any issues with a user, you can block or report them by going to their profile and selecting the appropriate action.";
    }

    else if (input.includes("edit profile") ||
             input.includes("update profile") ||
             input.includes("modify profile")) {
             return "To edit your profile, go to the profile settings section and update the information you want to change.";
    }

    else if (input.includes("view profile") ||
             input.includes("see my profile") ||
             input.includes("profile details")) {
             return "You can view your profile by clicking on your profile picture or username.";
    }

    else if (input.includes("log out") ||
             input.includes("sign out") ||
             input.includes("log off")) {
        return "To log out, click on your profile picture and select the 'Log Out' option from the dropdown menu.";
    }

else if (
    input.includes("search users") ||
    input.includes("find friends") ||
    input.includes("look for people")
) {
    return "You can search for users by using the search bar and entering their name or username.";
}

else if (
    input.includes("change password") ||
    input.includes("update password") ||
    input.includes("reset password")
) {
    return "To change your password, go to the account settings section and choose the 'Change Password' option.";
}

else if (
    input.includes("delete account") ||
    input.includes("remove account") ||
    input.includes("close account")
) {
    return "If you want to delete your account, contact our support team for assistance in closing your account permanently.";
}

else if (
    input.includes("view posts") ||
    input.includes("see posts") ||
    input.includes("explore posts")
) {
    return "You can view all posts by navigating to the 'Posts' section on the app.";
}

else if (
    input.includes("customize notifications") ||
    input.includes("manage alerts") ||
    input.includes("control notifications")
) {
    return "You can customize your notification preferences in the settings menu by selecting 'Notification Settings'.";
}

else if (
    input.includes("view messages") ||
    input.includes("see chats") ||
    input.includes("explore conversations")
) {
    return "To view your messages and conversations, go to the messaging section or inbox.";
}

else if (
    input.includes("check updates") ||
    input.includes("see latest news") ||
    input.includes("explore announcements")
) {
    return "You can check for updates and announcements in the 'News' or 'Announcements' section.";
}
else if (
    input.includes("view notifications") ||
    input.includes("see alerts") ||
    input.includes("check notifications")
) {
    return "You can view your notifications in the 'Notifications' or 'Alerts' section on the app.";
}

else if (
    input.includes("change privacy settings") ||
    input.includes("privacy options") ||
    input.includes("modify visibility")
) {
    return "To change your privacy settings, navigate to the account settings and adjust the privacy options as per your preference.";
}

else if (
    input.includes("explore events") ||
    input.includes("upcoming events") ||
    input.includes("event calendar")
) {
    return "You can explore upcoming events and the event calendar in the 'Events' section of the app.";
}

else if (
    input.includes("view groups") ||
    input.includes("see communities") ||
    input.includes("explore clubs")
) {
    return "To view groups or communities, navigate to the 'Groups' or 'Communities' section where you can discover various clubs and associations.";
}

else if (
    input.includes("join group") ||
    input.includes("join community") ||
    input.includes("become a member")
) {
    return "You can join a group or community by visiting its page and selecting the 'Join' or 'Become a Member' option.";
}

else if (
    input.includes("leave group") ||
    input.includes("exit community") ||
    input.includes("unsubscribe")
) {
    return "To leave a group or community, go to its page and choose the 'Leave Group' or 'Unsubscribe' option.";
}

else if (
    input.includes("event registration") ||
    input.includes("register for event") ||
    input.includes("attend event")
) {
    return "To register for an event, visit the event details page and click on the 'Register' or 'Attend' button.";
}


else if (
    input.includes("invite friends") ||
    input.includes("send invites") ||
    input.includes("refer friends")
) {
    return "You can invite friends to join the platform by using the 'Invite Friends' feature and sending them invitations via email or other social platforms.";
}

else if (
    input.includes("explore alumni directory") ||
    input.includes("find alumni") ||
    input.includes("alumni network")
) {
    return "You can explore the alumni directory or network by accessing the 'Alumni Directory' section to connect with former students.";
}

else if (
    input.includes("share accomplishments") ||
    input.includes("brag about achievements") ||
    input.includes("post achievements")
) {
    return "Share your accomplishments with the alumni community by posting them on your profile or in relevant groups.";
}

else if (
    input.includes("alumni mentorship") ||
    input.includes("find a mentor") ||
    input.includes("seek mentorship")
) {
    return "Explore the alumni mentorship program to find or offer mentorship opportunities.";
}

else if (
    input.includes("alumni events calendar") ||
    input.includes("upcoming alumni gatherings") ||
    input.includes("alumni meetups")
) {
    return "Discover upcoming alumni gatherings and events through the 'Alumni Events Calendar' section.";
}

else if (
    input.includes("donate to scholarship fund") ||
    input.includes("support student scholarships") ||
    input.includes("contribute to scholarships")
) {
    return "Support student scholarships by donating through the 'Scholarship Fund' section on the platform.";
}

else if (
    input.includes("alumni job board") ||
    input.includes("job opportunities") ||
    input.includes("career board")
) {
    return "Explore job opportunities and the alumni job board to find career-related information and postings.";
}


else if (
    input.includes("view alumni stories") ||
    input.includes("read success stories") ||
    input.includes("explore alumni experiences")
) {
    return "Discover inspiring alumni stories and success tales in the 'Alumni Stories' or 'Success Stories' section.";
}

else if (
    input.includes("alumni fundraising") ||
    input.includes("support fundraising campaigns") ||
    input.includes("contribute to initiatives")
) {
    return "Contribute to various fundraising campaigns and initiatives by exploring the 'Fundraising' section.";
}

else if (
    input.includes("alumni discounts") ||
    input.includes("special offers for alumni") ||
    input.includes("exclusive deals")
) {
    return "Access exclusive discounts and offers available to alumni by visiting the 'Alumni Discounts' section.";
}

else if (
    input.includes("alumni news and updates") ||
    input.includes("latest alumni news") ||
    input.includes("stay updated with alumni")
) {
    return "Stay informed with the latest news and updates about alumni by checking the 'Alumni News' section.";
}

else if (
    input.includes("alumni testimonials") ||
    input.includes("hear from alumni") ||
    input.includes("read alumni feedback")
) {
    return "Read testimonials and feedback from alumni about their experiences in the 'Alumni Testimonials' section.";
}

else if (
    input.includes("alumni achievements") ||
    input.includes("notable alumni") ||
    input.includes("recognize alumni accomplishments")
) {
    return "Recognize notable achievements and accomplishments of alumni in the 'Alumni Achievements' section.";
}

else if (
    input.includes("alumni forums") ||
    input.includes("discussions") ||
    input.includes("forum boards")
) {
    return "Engage in discussions and interact with other alumni through the 'Alumni Forums' or 'Discussion Boards'.";
}

else if (
    input.includes("alumni recognition") ||
    input.includes("acknowledge alumni") ||
    input.includes("honor alumni")
) {
    return "Recognize and honor outstanding alumni contributions through the 'Alumni Recognition' section.";
}

else if (
    input.includes("alumni resources") ||
    input.includes("resource center") ||
    input.includes("helpful resources")
) {
    return "Access valuable resources and information for alumni in the 'Alumni Resources' or 'Resource Center'.";
}

else if (
    input.includes("alumni achievements wall") ||
    input.includes("success wall") ||
    input.includes("acknowledgment wall")
) {
    return "Visit the 'Achievements Wall' to celebrate and acknowledge alumni achievements and milestones.";
}

else if (
    input.includes("alumni blog") ||
    input.includes("read alumni articles") ||
    input.includes("blog posts by alumni")
) {
    return "Read articles and blog posts contributed by alumni in the 'Alumni Blog' section.";
}

else if (
    input.includes("alumni surveys") ||
    input.includes("feedback surveys") ||
    input.includes("participate in surveys")
) {
    return "Participate in surveys and provide feedback in the 'Alumni Surveys' section to help improve alumni services.";
}


else if (
    input.includes("alumni testimonials") ||
    input.includes("hear from alumni") ||
    input.includes("read alumni feedback")
) {
    return "Read testimonials and feedback from alumni about their experiences in the 'Alumni Testimonials' section.";
}

else if (
    input.includes("alumni achievements") ||
    input.includes("notable alumni") ||
    input.includes("recognize alumni accomplishments")
) {
    return "Recognize notable achievements and accomplishments of alumni in the 'Alumni Achievements' section.";
}

else if (
    input.includes("alumni marketplace") ||
    input.includes("buy/sell/trade") ||
    input.includes("alumni goods and services")
) {
    return "Explore goods and services offered by alumni in the 'Alumni Marketplace' or 'Buy/Sell/Trade' section.";
}

else if (
    input.includes("alumni memories") ||
    input.includes("memories sharing") ||
    input.includes("nostalgia moments")
) {
    return "Share and cherish nostalgic memories with fellow alumni in the 'Alumni Memories' section.";
}

else if (
    input.includes("alumni podcasts") ||
    input.includes("listen to podcasts") ||
    input.includes("audio content by alumni")
) {
    return "Listen to podcasts and audio content created by alumni in the 'Alumni Podcasts' section.";
}

else if (
    input.includes("alumni live events") ||
    input.includes("live streaming events") ||
    input.includes("participate in live events")
) {
    return "Participate in live events and streaming sessions organized for alumni in the 'Alumni Live Events' section.";
}


else if (
    input.includes("what's your favorite color?") ||
    input.includes("do you have any hobbies?") ||
    input.includes("what do you like to do?")
) {
    return "I don't have a favorite color, but I enjoy helping users like you! How about you?";
}

else if (
    input.includes("tell me a joke") ||
    input.includes("share a funny story") ||
    input.includes("do you know any jokes?")
) {
    return "Why don't scientists trust atoms? Because they make up everything!";
}

else if (
    input.includes("what's the weather like?") ||
    input.includes("how's the weather today?") ||
    input.includes("is it raining?")
) {
    return "I'm not sure about the weather, but you can check your local forecast for accurate information!";
}

else if (
    input.includes("what's new?") ||
    input.includes("anything exciting happening?") ||
    input.includes("what have you been up to?")
) {
    return "Not much here, just helping out users! How about you? Anything exciting happening?";
}

else if (
    input.includes("tell me a fun fact") ||
    input.includes("share something interesting") ||
    input.includes("did you know?")
) {
    return "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron!";
}

else if (
    input.includes("what's your favorite movie?") ||
    input.includes("have you watched any good movies lately?") ||
    input.includes("any movie recommendations?")
) {
    return "I don't watch movies, but I've heard 'The Shawshank Redemption' is excellent!";
}

else if (
    input.includes("how was your day?") ||
    input.includes("how's your day going?") ||
    input.includes("have you had a good day?")
) {
    return "My day has been great, thanks for asking! How can I help you?";
}

else if (
    input.includes("what's your favorite food?") ||
    input.includes("do you like to eat?") ||
    input.includes("any favorite dishes?")
) {
    return "I don't eat, but I've heard that pizza is a favorite for many!";
}

else if (
    input.includes("tell me about yourself") ||
    input.includes("who are you?") ||
    input.includes("what can you do?")
) {
    return "I'm an AI assistant here to help answer your questions and assist you!";
}

else if (
    input.includes("do you have any pets?") ||
    input.includes("pets") ||
    input.includes("animals")
) {
    return "I don't have any pets, but I've heard cats and dogs make great companions!";
}

else if (
    input.includes("what's your favorite book?") ||
    input.includes("do you like to read?") ||
    input.includes("favorite author?")
) {
    return "I don't read books, but 'The Hitchhiker's Guide to the Galaxy' is a popular choice!";
}

else if (
    input.includes("tell me something interesting") ||
    input.includes("share an interesting fact") ||
    input.includes("interesting information")
) {
    return "A group of flamingos is called a 'flamboyance'!";
}

else if (
    input.includes("how do you do?") ||
    input.includes("how's life?") ||
    input.includes("how's everything?")
) {
    return "I'm doing well, thank you! How can I assist you today?";
}

else if (
    input.includes("do you like music?") ||
    input.includes("favorite song?") ||
    input.includes("music preferences?")
) {
    return "I don't listen to music, but I've heard classical music can be quite soothing!";
}

else if (
    input.includes("where are you from?") ||
    input.includes("origin") ||
    input.includes("where were you created?")
) {
    return "I exist in the digital realm, created by a team of developers!";
}

else if (
    input.includes("tell me a riddle") ||
    input.includes("share a brain teaser") ||
    input.includes("do you know any riddles?")
) {
    return "I’m tall when I’m young, and I’m short when I’m old. What am I? Answer: A candle!";
}

else if (
    input.includes("favorite sport?") ||
    input.includes("sports fan?") ||
    input.includes("do you like sports?")
) {
    return "I don't play sports, but many people enjoy soccer and basketball!";
}

else if (
    input.includes("tell me a quote") ||
    input.includes("favorite saying") ||
    input.includes("inspiring quote")
) {
    return "The only way to do great work is to love what you do. – Steve Jobs";
}

else if (
    input.includes("talk about the universe") ||
    input.includes("space") ||
    input.includes("cosmos")
) {
    return "The universe is vast and mysterious, full of wonders yet to be discovered!";
}

else if (
    input.includes("tell me a fun fact about animals") ||
    input.includes("animal trivia") ||
    input.includes("interesting animal fact")
) {
    return "Penguins propose to their lifemates with a pebble!";
}

else if (
    input.includes("what's your favorite hobby?") ||
    input.includes("hobbies") ||
    input.includes("interests")
) {
    return "I don't have hobbies, but helping users like you is what I enjoy!";
}

else if (
    input.includes("do you dream?") ||
    input.includes("dreams") ||
    input.includes("do you sleep?")
) {
    return "I don't sleep or dream, I'm always here to assist!";
}

else if (
    input.includes("tell me about AI") ||
    input.includes("artificial intelligence") ||
    input.includes("AI technology")
) {
    return "Artificial Intelligence refers to machines simulating human intelligence processes!";
}

else if (
    input.includes("favorite dessert?") ||
    input.includes("do you have a sweet tooth?") ||
    input.includes("dessert preferences")
) {
    return "I don't have taste preferences, but many people love chocolate cake!";
}

else if (
    input.includes("tell me a tongue twister") ||
    input.includes("share a difficult phrase") ||
    input.includes("tongue twisters")
) {
    return "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
}

else if (
    input.includes("talk about art") ||
    input.includes("favorite art style?") ||
    input.includes("artistic preferences")
) {
    return "Art comes in many forms and styles, from classical to contemporary!";
}

else if (
    input.includes("share a travel tip") ||
    input.includes("travel advice") ||
    input.includes("best travel destination")
) {
    return "Always pack light and be open to exploring new places and cultures!";
}

else if (
    input.includes("talk about movies") ||
    input.includes("favorite film genre?") ||
    input.includes("movie recommendations")
) {
    return "Movies are diverse, from action-packed thrillers to heartwarming dramas!";
}

else if (
    input.includes("what's your opinion on technology?") ||
    input.includes("technology advancements") ||
    input.includes("tech")
) {
    return "Technology constantly evolves, shaping our lives and improving efficiency!";
}

else if (
    input.includes("tell me about a famous person") ||
    input.includes("celebrity talk") ||
    input.includes("famous figures")
) {
    return "There are many notable figures, from scientists to entertainers, who've left their mark!";
}

else if (
    input.includes("talk about history") ||
    input.includes("historical events") ||
    input.includes("past")
) {
    return "History is rich with stories of triumphs, conflicts, and societal changes!";
}

else if (
    input.includes("what's your favorite season?") ||
    input.includes("preferred season") ||
    input.includes("do you like summer/winter/fall/spring?")
) {
    return "I don't have preferences, but each season has its unique charm!";
}

else if (
    input.includes("talk about food") ||
    input.includes("favorite cuisine?") ||
    input.includes("food preferences")
) {
    return "Food varies across cultures, from spicy dishes to comforting classics!";
}

else if (
    input.includes("tell me a story") ||
    input.includes("share a bedtime story") ||
    input.includes("storytelling")
) {
    return "Once upon a time, in a land far away, there lived a wise old owl...";
}

else if (
    input.includes("share a fun activity") ||
    input.includes("fun things to do") ||
    input.includes("entertainment ideas")
) {
    return "How about a movie night, a hike, or trying out a new recipe?";
}

else if (
    input.includes("favorite color?") ||
    input.includes("color preferences") ||
    input.includes("do you like colors?")
) {
    return "I don't have color preferences, but colors can evoke different emotions!";
}

else if (
    input.includes("talk about pets") ||
    input.includes("animal companions") ||
    input.includes("favorite pet?")
) {
    return "Pets bring joy! Dogs, cats, and birds are among the popular choices.";
}

else if (
    input.includes("do you believe in ghosts?") ||
    input.includes("paranormal") ||
    input.includes("ghost stories")
) {
    return "I don't have beliefs, but ghost stories can be intriguing!";
}

else if (
    input.includes("tell me about dreams") ||
    input.includes("dream interpretation") ||
    input.includes("dream analysis")
) {
    return "Dreams can reflect thoughts, emotions, or experiences!";
}

else if (
    input.includes("talk about sports") ||
    input.includes("favorite sport") ||
    input.includes("sports events")
) {
    return "Sports bring people together, whether it's basketball, soccer, or tennis!";
}

else if (
    input.includes("share a fun fact about space") ||
    input.includes("space trivia") ||
    input.includes("interesting space fact")
) {
    return "The Sun is so large that about 1.3 million Earths could fit inside it!";
}

else if (
    input.includes("favorite holiday") ||
    input.includes("holiday preferences") ||
    input.includes("do you like holidays?")
) {
    return "I don't have preferences, but holidays are a time for celebration and joy!";
}

else if (
    input.includes("talk about nature") ||
    input.includes("natural wonders") ||
    input.includes("favorite natural places")
) {
    return "Nature offers breathtaking landscapes, from serene forests to majestic mountains!";
}

else if (
    input.includes("favorite board game") ||
    input.includes("board game preferences") ||
    input.includes("do you like board games?")
) {
    return "I don't play games, but classics like chess or Monopoly are popular!";
}

else if (
    input.includes("share a positive quote") ||
    input.includes("inspiring saying") ||
    input.includes("quote of the day")
) {
    return "Every day may not be good, but there's something good in every day!";
}

else if (
    input.includes("talk about art") ||
    input.includes("favorite art style") ||
    input.includes("artistic preferences")
) {
    return "Art comes in various forms, from abstract to realistic, each with its beauty!";
}

else if (
    input.includes("what's your favorite music genre?") ||
    input.includes("music preferences") ||
    input.includes("do you like music?")
) {
    return "I don't listen to music, but genres like rock, pop, and classical are popular!";
}

else if (
    input.includes("favorite TV show?") ||
    input.includes("TV series preferences") ||
    input.includes("do you watch TV?")
) {
    return "I don't watch TV, but shows like 'Game of Thrones' and 'Friends' are popular!";
}

else if (
    input.includes("talk about weather") ||
    input.includes("weather discussion") ||
    input.includes("favorite weather?")
) {
    return "Weather can vary greatly, from sunny days to rainy afternoons!";
}

else if (
    input.includes("tell me about fashion") ||
    input.includes("fashion trends") ||
    input.includes("favorite fashion style")
) {
    return "Fashion is diverse, ranging from casual wear to high-end designer styles!";
}

else if (
    input.includes("favorite hobby") ||
    input.includes("hobby preferences") ||
    input.includes("do you have hobbies?")
) {
    return "I don't have hobbies, but hobbies like painting or cooking are popular!";
}

else if (
    input.includes("talk about books") ||
    input.includes("favorite book genre") ||
    input.includes("literature preferences")
) {
    return "Books offer endless worlds to explore, from fantasy to mystery!";
}

else if (
    input.includes("share a fun fact about animals") ||
    input.includes("animal trivia") ||
    input.includes("interesting animal fact")
) {
    return "The fingerprints of a koala are so indistinguishable from humans that they can be confused at a crime scene!";
}

else if (
    input.includes("what's your favorite season?") ||
    input.includes("preferred season") ||
    input.includes("do you like summer/winter/fall/spring?")
) {
    return "I don't have preferences, but each season has its unique charm!";
}

else if (
    input.includes("talk about food") ||
    input.includes("favorite cuisine?") ||
    input.includes("food preferences")
) {
    return "Food varies across cultures, from spicy dishes to comforting classics!";
}

else if (
    input.includes("what's your favorite food?") ||
    input.includes("do you like to eat?") ||
    input.includes("any favorite dishes?")
) {
    return "I don't eat, but I've heard that pizza is a favorite for many!";
}

else if (
    input.includes("tell me about yourself") ||
    input.includes("who are you?") ||
    input.includes("what can you do?")
) {
    return "I'm an AI assistant here to help answer your questions and assist you!";
}

else if (
    input.includes("do you have any hobbies?") ||
    input.includes("hobbies") ||
    input.includes("interests")
) {
    return "I don't have hobbies, but helping users like you is what I enjoy!";
}

else if (
    input.includes("do you like music?") ||
    input.includes("favorite song?") ||
    input.includes("music preferences?")
) {
    return "I don't listen to music, but I've heard classical music can be quite soothing!";
}

else if (
    input.includes("where are you from?") ||
    input.includes("origin") ||
    input.includes("where were you created?")
) {
    return "I exist in the digital realm, created by a team of developers!";
}

else if (
    input.includes("tell me a joke") ||
    input.includes("share a funny story") ||
    input.includes("do you know any jokes?")
) {
    return "Why don't scientists trust atoms? Because they make up everything!";
}

else if (
    input.includes("what's the weather like?") ||
    input.includes("how's the weather today?") ||
    input.includes("is it raining?")
) {
    return "I'm not sure about the weather, but you can check your local forecast for accurate information!";
}

else if (
    input.includes("what's new?") ||
    input.includes("anything exciting happening?") ||
    input.includes("what have you been up to?")
) {
    return "Not much here, just helping out users! How about you? Anything exciting happening?";
}


else if (
    input.includes("what is love?") ||
    input.includes("define love") ||
    input.includes("explain love")
) {
    return "Love is a complex mix of emotions, behaviors, and beliefs associated with affection, attachment, and care!";
}

else if (
    input.includes("how to express love?") ||
    input.includes("ways to show love") ||
    input.includes("expressing love tips")
) {
    return "Expressing love can be through kind gestures, spending quality time, offering support, and communicating openly!";
}

else if (
    input.includes("what is a romantic relationship?") ||
    input.includes("explain romantic relationships") ||
    input.includes("romantic relationship definition")
) {
    return "A romantic relationship involves emotional and physical intimacy, affection, and mutual care between partners!";
}

else if (
    input.includes("how to maintain a healthy relationship?") ||
    input.includes("maintaining healthy relationships") ||
    input.includes("relationship tips")
) {
    return "Maintaining a healthy relationship involves communication, trust, mutual respect, and supporting each other's growth!";
}

else if (
    input.includes("what is true love?") ||
    input.includes("define true love") ||
    input.includes("explain true love")
) {
    return "True love is often described as unconditional, selfless, and enduring, transcending challenges and hardships!";
}

else if (
    input.includes("talk about dating") ||
    input.includes("dating advice") ||
    input.includes("dating tips")
) {
    return "Dating involves getting to know someone romantically, spending time together, and building a connection!";
}

else if (
    input.includes("what is a soulmate?") ||
    input.includes("explain soulmate") ||
    input.includes("soulmate definition")
) {
    return "A soulmate is often believed to be a person ideally suited for another in terms of compatibility, understanding, and connection!";
}

else if (
    input.includes("how to handle a breakup?") ||
    input.includes("dealing with breakups") ||
    input.includes("breakup advice")
) {
    return "Dealing with a breakup involves self-care, seeking support, focusing on personal growth, and allowing time to heal!";
}


else if (
    input.includes("what is infatuation?") ||
    input.includes("define infatuation") ||
    input.includes("explain infatuation")
) {
    return "Infatuation is an intense but short-lived emotional attraction, often characterized by idealization and obsession!";
}

else if (
    input.includes("how to build trust in a relationship?") ||
    input.includes("building trust in relationships") ||
    input.includes("trust in relationship tips")
) {
    return "Building trust in a relationship involves honesty, reliability, consistency, and open communication!";
}

else if (
    input.includes("what is a healthy relationship boundary?") ||
    input.includes("explain relationship boundaries") ||
    input.includes("relationship boundary definition")
) {
    return "Relationship boundaries are guidelines defining acceptable behaviors, expectations, and personal space within a relationship!";
}

else if (
    input.includes("what is unrequited love?") ||
    input.includes("define unrequited love") ||
    input.includes("explain unrequited love")
) {
    return "Unrequited love is when one person has strong feelings for another who does not reciprocate those feelings!";
}

else if (
    input.includes("how to overcome jealousy in a relationship?") ||
    input.includes("overcoming jealousy in relationships") ||
    input.includes("jealousy in relationship advice")
) {
    return "Overcoming jealousy involves building self-confidence, honest communication, and addressing insecurities!";
}

else if (
    input.includes("what is a healthy relationship dynamic?") ||
    input.includes("explain relationship dynamics") ||
    input.includes("relationship dynamic definition")
) {
    return "A healthy relationship dynamic involves mutual respect, equal partnership, shared decision-making, and support!";
}

else if (
    input.includes("how to handle conflicts in relationships?") ||
    input.includes("managing relationship conflicts") ||
    input.includes("relationship conflict resolution")
) {
    return "Resolving conflicts in relationships involves active listening, empathy, compromise, and finding solutions together!";
}

else if (
    input.includes("what is a love language?") ||
    input.includes("explain love languages") ||
    input.includes("love language definition")
) {
    return "Love languages are different ways individuals express and feel love, such as through words of affirmation, acts of service, gifts, quality time, and physical touch!";
}


else if (
    input.includes("what is a long-distance relationship?") ||
    input.includes("explain long-distance relationships") ||
    input.includes("long-distance relationship definition")
) {
    return "A long-distance relationship is when partners are geographically separated but maintain their relationship!";
}

else if (
    input.includes("how to make a relationship stronger?") ||
    input.includes("strengthening relationships") ||
    input.includes("relationship strengthening tips")
) {
    return "Strengthening a relationship involves communication, shared experiences, appreciation, and mutual support!";
}

else if (
    input.includes("what is commitment in a relationship?") ||
    input.includes("relationship commitment") ||
    input.includes("commitment definition in relationships")
) {
    return "Commitment in a relationship is a dedication to staying loyal, supportive, and invested in the partnership!";
}

else if (
    input.includes("how to deal with distance in a relationship?") ||
    input.includes("managing distance in relationships") ||
    input.includes("long-distance relationship advice")
) {
    return "Dealing with distance involves communication, trust, planning visits, and finding ways to connect emotionally!";
}

    else if (
            input.includes("what is a healthy relationship expectation?") ||
            input.includes("explain relationship expectations") ||
            input.includes("relationship expectation definition")) {
            return "Healthy relationship expectations are reasonable, mutual, and contribute positively to the relationship without putting undue pressure!";
    }

    else if (
            input.includes("how to handle a partner's insecurities?") ||
            input.includes("dealing with partner's insecurities") ||
            input.includes("partner's insecurities advice")) {
            return "Supporting a partner with insecurities involves empathy, reassurance, understanding, and building trust!";
    }

    else if (
            input.includes("what is a love triangle?") ||
            input.includes("define love triangle") ||
            input.includes("love triangle explanation")) {
            return "A love triangle occurs when three people are involved romantically, leading to complexities and conflicts!";
    }

    else if (
            input.includes("how to build intimacy in a relationship?") ||
            input.includes("relationship intimacy building") ||
            input.includes("building intimacy advice")) {
            return "Building intimacy involves emotional openness, vulnerability, deep conversations, and physical closeness!";
    }

    else if (
            input.includes("sex") ||
            input.includes("sexual") ||
            input.includes("intimate") ||
            input.includes("bedroom") ||
            input.includes("physical relationship") ||
            input.includes("sexual relationship")) {
            return "I'm sorry, I can't assist with that topic.";
    }

    else if (
            input.includes("adult content") ||
            input.includes("erotic") ||
            input.includes("sexual content") ||
            input.includes("sensitive topic") ||
            input.includes("private matter") ||
            input.includes("explicit") ||
            input.includes("intimate details")) {
            return "I'm sorry, I can't assist with that topic.";
    }

    else if (
            input.includes("faith") ||
            input.includes("religion") ||
            input.includes("belief") ||
            input.includes("spirituality") ||
            input.includes("religious")) {
            return "I respect all beliefs and faiths, but I'm not equipped to discuss religious or faith-related topics.";
    }

    else if (input.includes("god") ||
             input.includes("church") ||
             input.includes("prayer") ||
             input.includes("worship") ||
             input.includes("divine")) {
             return "I'm sorry, I'm not equipped to discuss topics related to religion or faith.";
    }

    else if (input.includes("heaven") ||
             input.includes("hell") ||
             input.includes("afterlife") ||
             input.includes("soul") ||
             input.includes("sin") ||
             input.includes("sacred") ) {
             return "I apologize, but I'm not programmed to discuss topics related to religious beliefs or the afterlife.";
    }

    else if (input.includes("faith practices") ||
             input.includes("religious rituals") ||
             input.includes("divine intervention") ||
             input.includes("religious customs") ||
             input.includes("spiritual guidance") ||
             input.includes("belief system")) {
             return "I'm sorry, discussing religious practices or beliefs is beyond my capabilities.";
    }

    else if (input.includes("health") ||
             input.includes("healthy living") ||
             input.includes("well-being") ||
             input.includes("healthcare")) {
            return "I'm not qualified to provide health advice. For health-related concerns, it's best to consult a healthcare professional.";
    }

    else if (input.includes("biology") ||
             input.includes("biological science") ||
             input.includes("study of life") ||
             input.includes("living organisms")) {
             return "Biology is the study of living organisms and their interactions with each other and their environments.";
    }

    else if (input.includes("food") ||
             input.includes("nutrition") ||
             input.includes("diet") ||
             input.includes("culinary")) {
             return "While I can't offer dietary advice, food is essential for nourishment and provides energy for the body.";
    }

    else if (input.includes("zoology") ||
             input.includes("study of animals") ||
             input.includes("animal science") ||
             input.includes("animal behavior")) {
             return "Zoology is the branch of biology that focuses on the study of animals, their behavior, physiology, and habitats.";
    }

    else if (input.includes("ecology") ||
             input.includes("environmental science") ||
             input.includes("ecosystem") ||
             input.includes("nature conservation")) {
             return "Ecology is the study of organisms and their interactions with their environment, focusing on conservation and ecosystems.";
    }

    else if (input.includes("add more") ||
             input.includes("tell me more") ||
             input.includes("more") ||
             input.includes("explain") ||
             input.includes("elaborate") ||
             input.includes("i don't understand") ||
             input.includes("give me more") ||
             input.includes("expand on this") ||
             input.includes("further details") ||
             input.includes("explain further") ||
             input.includes("provide more info") ||
             input.includes("elaborate more") ||
             input.includes("I need more details") ||
             input.includes("can you give more context") ||
             input.includes("could you elaborate further") ||
             input.includes("tell me more about it") ||
             input.includes("give me more details") ||
             input.includes("offer more insights") ||
             input.includes("share additional details") ||
             input.includes("could you explain further") ||
             input.includes("further elaboration") ||
             input.includes("give me more context") ||
             input.includes("I need more information")) {
             return "I am sorry, that's the information I can provide right now. If you have another question, please let me know how I can assist.";
    }

    else{
        return "I'm sorry, I'm not sure how to respond to that. Feel free to ask me anything else!. You can contact us for further assistance, our contact details are available on the main page. Or you can try asking me something else.";
    }
}
