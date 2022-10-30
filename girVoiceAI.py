import pyttsx3

friend = pyttsx3.init()
voices = friend.getProperty('voices')
#changing to women voice
friend.setProperty('voice', voices[1].id)

#write everything you want to hear in 'friend.say()'!
friend.say("Hello, I am your friend" + "Moreover, you are the best developper I've met.")

friend.runAndWait()