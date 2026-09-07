const {
    KinesisClient,
    PutRecordCommand
} = require("@aws-sdk/client-kinesis");

class KinesisProxy {
    constructor(streamName) {
        this.streamName = streamName;
        this.client = new KinesisClient({
            region: "us-east-1"
        });
    }

    async putRecord() {
        try {
            const putRecordParams = {
                Data: "",
                PartitionKey: "test",
                StreamName: this.streamName
            }
            const command = new PutRecordCommand(putRecordParams);
            await this.client.send(command);
            console.log("Record added successfully");
        } catch (error) {
            console.log("error adding the record");
        }
    }
}

module.exports = KinesisProxy;
