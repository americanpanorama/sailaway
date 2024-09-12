import React from 'react';
import { ContactUsFormContainer } from './styled';

const ContactUs = () => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const xhr = new XMLHttpRequest(),
      params = [
        encodeURIComponent('Form_ID') + '=' + encodeURIComponent('bot_contact_us'),
        encodeURIComponent('Owner_ID') + '=' + encodeURIComponent('rnelson2'),
        encodeURIComponent('send_submit') + '=' + encodeURIComponent('data'),
        encodeURIComponent('send_submit_to') + '=' + encodeURIComponent('rnelson2'),
        encodeURIComponent('project') + '=' + encodeURIComponent('bot_contact_form'),
        // @ts-ignore
        encodeURIComponent('name') + '=' + encodeURIComponent(evt.target.name.value),
        // @ts-ignore
        encodeURIComponent('email') + '=' + encodeURIComponent(evt.target.email.value),
        // @ts-ignore
        encodeURIComponent('message') + '=' + encodeURIComponent(evt.target.message.value)
      ].join('&');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        (document.getElementById("contactUsForm") as HTMLDivElement).innerHTML = "<p>We have received your message. Thank you for contacting us.</p>";
      }
    };

    xhr.open("POST", 'https://webapps.richmond.edu/URPoster/URPoster.php');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);

    return false;
  };

  return (
    <main>
      <ContactUsFormContainer id='contactUsForm'>
        <h2>Contact Us</h2>
        <form name='bot_contact_us' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' maxLength={50} name='name' />

          <label htmlFor='email'>Email</label>
          <input type='text' maxLength={50} name='email' />

          <label htmlFor='message'>Message</label>
          <textarea name="message" />

          <input type="submit" />
        </form>
      </ContactUsFormContainer>
    </main>
  );
}

export default ContactUs;
