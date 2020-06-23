const AWS = require("aws-sdk");
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const lifeCycle = require("./lifecycle.json");
const {buckets} = require("./buckets.json");


async function getLifeCycleOnBucket(bucketId){
    try{
        return await s3.getBucketLifecycleConfiguration({Bucket: bucketId}).promise();
    }catch(err){
        console.log(err)
        return err
    }

}
async function putLifecycleOnBucket(bucketId){
    try{
        console.log(`Attempt lifecycle on bucket ${bucketId}`);
        let put = await s3.putBucketLifecycleConfiguration({Bucket: bucketId,LifecycleConfiguration: lifeCycle}).promise();
        console.log(`Lifecycle is on bucket ${bucketId}`);
        return  put;
    }catch(err){
        console.log(err)
        return err
    }
}

async function main(){
    try{

        console.log("Using access key:", AWS.config.credentials.accessKeyId);
        buckets.forEach(bucket => putLifecycleOnBucket(bucket))

    }catch(err){
        console.log(err)
    }

}

return main()




