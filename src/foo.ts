import { GetObjectCommand, S3 } from '@aws-sdk/client-s3';

export async function handler() {
    console.log('Start');

    await new S3({}).send(new GetObjectCommand({ Bucket: 'bucket', Key: 'key' }));

    console.log('End');
}