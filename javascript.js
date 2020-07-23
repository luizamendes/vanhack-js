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
  const modalContent = document.querySelector('.modal__content');
  const closeButton = document.getElementsByClassName('close')[0];

  const setModalContent = (premium) => {
    let title = 'Apply to this event';
    let content = 'Insert your email and click on apply';
    if (premium) {
      title = 'This is a premium-only webinar';
      content = 'Click on the button to know more about premium membership';
    }
    modalTitle.innerHTML = title;
    modalContent.innerHTML = content;
  };

  const openModal = (premium) => {
    setModalContent(premium);
    modal.style.display = 'block';
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeButton.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  for (let event of nextEvents) {
    const div = document.createElement('div');

    const title = document.createElement('h3');
    title.innerHTML = event.name;
    div.appendChild(title);

    if (event.kind === 'premium') {
      title.classList.add('spotlight');
      const premiumFlag = document.createElement('div');
      premiumFlag.classList.add('premium-flag');
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star', 'checked');
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
    description.hidden = true;
    div.appendChild(description);

    const detailsButton = document.createElement('button');
    detailsButton.textContent = 'More details';
    detailsButton.classList.add('details-button');
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
    applyButton.classList.add('apply-button');
    applyButton.addEventListener('click', () => openModal(event.premium));
    div.appendChild(applyButton);

    div.classList.add('event-card');

    events.appendChild(div);
  }
};
