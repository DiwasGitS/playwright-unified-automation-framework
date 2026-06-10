class ContainerJobService {

    async runContainerJob(jobName) {

        console.log(`Running Container Job: ${jobName}`);

        return {
            status: 'SUCCESS',
            jobName: jobName
        };
    }
}

module.exports = ContainerJobService;