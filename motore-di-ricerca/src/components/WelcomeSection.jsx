const WelcomeSection = () => {
  const styles = {
    divWelcome: {
      backgroundColor: '#F0C78E',
      height: '14rem'
    },
    color: {
      color: '#BF5353'
    },
  }

  return (
    <div style={styles.divWelcome} className="px-5 py-4 rounded rounded-3">
      <h1 style={styles.color} className="px-3">Welcome to the JobsCenter</h1>
      <p className="px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatibus, ullam doloremque debitis accusantium voluptate reprehenderit sequi officia incidunt rerum vero officiis molestias eos odio eius doloribus impedit dolores repudiandae.</p>
      <div className="text-center">
      <p className="m-0" style={styles.color}>Start your search</p>
      <i class="bi bi-chevron-compact-down fs-4" style={styles.color}></i>
      </div>
    </div>
  )
}

export default WelcomeSection