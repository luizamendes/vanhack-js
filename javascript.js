window.onload = function () {
  const nextEvents = [
    {
      name: 'Germany VanHackers Meetup',
      type: 'MeetUp',
      date: '08/20/2020',
      kind: 'common',
      where: 'Germany',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      name: 'Brazil Leap',
      type: 'Leap',
      date: '08/21/2020',
      where: 'Brazil',
      kind: 'spotlight',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      name: 'Brazil Mission',
      type: 'Recruiting Mission',
      date: '08/22/2020',
      where: 'Brazil',
      kind: 'spotlight',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      name: 'Black Lives Matter Hackathon',
      type: 'VanHackathon',
      date: '08/23/2020',
      where: 'Online',
      kind: 'spotlight',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      name: 'Tips to get the best job spots',
      type: 'Premium-only Webinar',
      date: '09/01/2020',
      where: 'Online',
      kind: 'premium',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      name: 'Get your resume in order',
      type: 'Open Webinar',
      date: '09/03/2020',
      where: 'Online',
      kind: 'common',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];

  const events = document.querySelector('.events');
  const modal = document.querySelector('.modal');
  const modalTitle = document.querySelector('.modal__title');
  const modalContent = document.querySelector('.modal__subtitle');
  const modalEventName = document.querySelector('.modal__event-name');
  const closeButton = document.querySelector('.close');
  const modalSuccess = document.querySelector('.email__submit__success');
  const emailForm = document.querySelector('.email__submit');
  const emailInput = document.querySelector('.email__submit__input');
  const premiumModalStar = document.querySelector('#premium-star-modal');
  const membershipModalButton = document.querySelector(
    '#membership-modal-button'
  );
  const applicationSubmitButton = document.querySelector(
    '#application-submit-button'
  );

  const setModalContent = (premium, name) => {
    let title = 'Apply to this event';
    let content = 'Insert your email below and click on apply';
    if (premium) {
      title = 'This is a premium-only webinar';
      content =
        'Click on the button below to know more about our premium membership';
      premiumModalStar.style.display = 'flex';
      membershipModalButton.style.display = 'block';
      emailForm.style.display = 'none';
    } else {
      premiumModalStar.style.display = 'none';
      membershipModalButton.style.display = 'none';
      emailForm.style.display = 'flex';
    }
    modalTitle.textContent = title;
    modalContent.textContent = content;
    modalEventName.innerHTML = `<strong>${name}</strong>`;
  };

  const openModal = (premium, name) => {
    setModalContent(premium, name);
    modal.style.display = 'block';
  };

  const closeModal = () => {
    modal.style.display = 'none';
    modalSuccess.style.display = 'none';
    emailInput.value = '';
  };

  closeButton.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const applyToEvent = (e) => {
    e.preventDefault();
    applicationSubmitButton.setAttribute('disabled', 'disabled');
    setTimeout(function () {
      modalSuccess.style.display = 'block';
      applicationSubmitButton.removeAttribute('disabled', 'disabled');
    }, 1000);
  };

  for (let event of nextEvents) {
    const div = document.createElement('div');

    const title = document.createElement('h3');
    title.innerHTML = event.name;
    title.setAttribute('name', event.name);
    div.appendChild(title);

    if (event.kind === 'premium') {
      title.classList.add('spotlight');
      const premiumFlag = document.createElement('div');
      premiumFlag.classList.add('premium-flag');
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star', 'star');
      premiumFlag.appendChild(star);
      div.appendChild(premiumFlag);
    } else if (event.kind === 'spotlight') {
      title.classList.add('spotlight');
    }

    const type = document.createElement('p');
    type.innerHTML = `<strong>${event.type}</strong>`;
    div.appendChild(type);

    const when = document.createElement('p');
    when.innerHTML = `<strong>When:</strong> ${event.date}`;
    div.appendChild(when);

    const where = document.createElement('p');
    where.innerHTML = `<strong>Where:</strong> ${event.where}`;
    div.appendChild(where);

    const description = document.createElement('p');
    description.innerHTML = event.description;
    description.classList.add('description');
    description.hidden = true;
    div.appendChild(description);

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'More details';
    detailsButton.classList.add('secondary-button');
    detailsButton.addEventListener('click', () => {
      description.hidden = !description.hidden;
      if (detailsButton.textContent === 'More details') {
        detailsButton.textContent = 'Less details';
      } else {
        detailsButton.textContent = 'More details';
      }
    });
    div.appendChild(detailsButton);

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply now';
    applyButton.classList.add('primary-button');
    applyButton.addEventListener('click', () =>
      openModal(event.kind === 'premium', event.name)
    );
    div.appendChild(applyButton);

    const emailForm = document.querySelector('.email__submit');
    emailForm.addEventListener('submit', applyToEvent);

    const twitterDiv = document.createElement('div');
    twitterDiv.classList.add('twitterContainer');
    const twitterButton = document.createElement('a');
    twitterButton.classList.add('twitter-share-button');
    const text = `Check out this awesome VanHack event: ${event.name} @`;
    twitterButton.href = `https://twitter.com/intent/tweet?text=${encodeURI(
      text
    )}`;
    twitterButton.textContent = 'Tweet';
    twitterDiv.appendChild(twitterButton);
    div.appendChild(twitterDiv);

    div.classList.add('event-card');

    events.appendChild(div);
  }
};
